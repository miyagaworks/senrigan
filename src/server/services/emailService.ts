// src/server/services/emailService.ts
import nodemailer from 'nodemailer';
import { Config } from '../types/config';

// 環境変数から設定を読み込む
const config: Config = {
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.example.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER || '',
    password: process.env.SMTP_PASSWORD || '',
    from: process.env.SMTP_FROM || 'no-reply@senrigan.systems',
    adminEmail: process.env.ADMIN_EMAIL || 'info@senrigan.systems',
  },
  recaptcha: {
    secretKey: process.env.RECAPTCHA_SECRET_KEY || '',
  }
};

// メール送信用のトランスポーター設定
const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: config.smtp.secure,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.password,
  }
});

// reCAPTCHA検証
export const validateRecaptcha = async (token: string): Promise<boolean> => {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${config.recaptcha.secretKey}&response=${token}`
    });
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return false;
  }
};

// メール送信関数
export const sendContactEmail = async (
  name: string,
  email: string,
  message: string
): Promise<void> => {
  // 管理者向けメール
  const adminMailOptions = {
    from: config.smtp.from,
    to: config.smtp.adminEmail,
    subject: '【お問い合わせ】新規のお問い合わせがありました',
    text: `
お問い合わせがありました。

■お名前
${name}

■メールアドレス
${email}

■お問い合わせ内容
${message}
    `.trim(),
  };

  // 自動返信メール
  const autoReplyOptions = {
    from: config.smtp.from,
    to: email,
    subject: '【Senrigan】お問い合わせありがとうございます',
    text: `
${name} 様

お問い合わせありがとうございます。
以下の内容で承りました。
内容を確認の上、担当者より順次ご連絡させていただきます。

■お問い合わせ内容
${message}

※このメールは自動送信されています。
このメールに返信いただいても回答できない場合がございます。

--
株式会社Senrigan
〒731-0137
広島県広島市安佐南区山本2-3-35
TEL: 082-209-0181
    `.trim(),
  };

  try {
    // 管理者向けメール送信
    await transporter.sendMail(adminMailOptions);
    // 自動返信メール送信
    await transporter.sendMail(autoReplyOptions);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('メール送信に失敗しました');
  }
};
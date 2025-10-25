import { Router } from 'express';
import nodemailer from 'nodemailer';
import multer from 'multer';
import { RequestHandler } from 'express';
import fetch from 'node-fetch';

const router = Router();

// Multerのファイル型定義
interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}

// reCAPTCHAレスポンスの型定義
interface ReCaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score?: number;
  action?: string;
  "error-codes"?: string[];
}

// reCAPTCHA検証関数
async function validateRecaptcha(token: string): Promise<boolean> {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error('reCAPTCHA secret key is not configured');
      return false;
    }

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: 'POST' }
    );

    const data = await response.json() as ReCaptchaResponse;
    
    if (data["error-codes"]?.length) {
      console.error('reCAPTCHA verification errors:', data["error-codes"]);
    }
    
    return data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// アップロード設定
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

const uploadFields = upload.fields([
  { name: 'resume', maxCount: 1 },
  { name: 'coverLetter', maxCount: 1 }
]);

// ルートハンドラー
const handleApplicationSubmission: RequestHandler = async (req, res) => {
  try {
    const {
      name,
      nameKana,
      email,
      phone,
      position,
      message,
      recaptchaToken
    } = req.body;

    // 必須項目の検証
    if (!name || !nameKana || !email || !phone || !position || !recaptchaToken) {
      res.status(400).json({ error: '必須項目が入力されていません' });
      return;
    }

    // reCAPTCHAの検証
    const isValidRecaptcha = await validateRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      res.status(400).json({ error: 'reCAPTCHA認証に失敗しました' });
      return;
    }

    // メール送信の設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      }
    });

    // 添付ファイルの準備
    const attachments = [];
    const files = req.files as { [fieldname: string]: MulterFile[] } | undefined;

    if (files?.resume) {
      attachments.push({
        filename: files.resume[0].originalname,
        content: files.resume[0].buffer
      });
    }

    if (files?.coverLetter) {
      attachments.push({
        filename: files.coverLetter[0].originalname,
        content: files.coverLetter[0].buffer
      });
    }

    // 人事部門向けメール
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'recruit@senrigan.systems',
      subject: '【採用応募】新規応募がありました',
      text: `
新規応募がありました。

■基本情報
氏名: ${name}
フリガナ: ${nameKana}
メールアドレス: ${email}
電話番号: ${phone}

■応募情報
希望職種: ${position}
自己PR:
${message || '記入なし'}

応募書類は添付ファイルをご確認ください。
      `.trim(),
      attachments
    });

    // 応募者向け自動返信メール
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: '【Senrigan】ご応募ありがとうございます',
      text: `
${name} 様

Senriganへの採用応募をいただき、ありがとうございます。
以下の内容で応募を受け付けました。

■応募内容
希望職種: ${position}

内容を確認の上、1週間以内に担当者よりご連絡させていただきます。
今しばらくお待ちくださいますようお願いいたします。

※このメールは自動送信されています。
このメールに返信いただいても回答できない場合がございます。

--
株式会社Senrigan
採用担当
〒731-0137
広島県広島市安佐南区山本2-3-35
TEL: 082-209-0181
      `.trim()
    });

    res.status(200).json({ message: '応募を受け付けました' });
  } catch (error) {
    console.error('Error in apply endpoint:', error);
    res.status(500).json({ error: '送信に失敗しました' });
  }
};

router.post('/', uploadFields, handleApplicationSubmission);

export default router;
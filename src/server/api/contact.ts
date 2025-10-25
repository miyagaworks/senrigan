// src/server/api/contact.ts
import { Router, RequestHandler } from 'express';
import { validateRecaptcha, sendContactEmail } from '../services/emailService';

interface ContactRequest {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

interface SuccessResponse {
  message: string;
}

interface ErrorResponse {
  error: string;
}

const router = Router();

const handleContact: RequestHandler<
  Record<string, never>,
  SuccessResponse | ErrorResponse,
  ContactRequest
> = async (req, res) => {
  try {
    const { name, email, message, recaptchaToken } = req.body;

    // 入力値の検証
    if (!name || !email || !message || !recaptchaToken) {
      res.status(400).json({ error: '必須項目が入力されていません' });
      return;
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: 'メールアドレスの形式が正しくありません' });
      return;
    }

    // reCAPTCHAの検証
    const isValidRecaptcha = await validateRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      res.status(400).json({ error: 'reCAPTCHA認証に失敗しました' });
      return;
    }

    // メール送信
    await sendContactEmail(name, email, message);

    res.status(200).json({ message: '送信が完了しました' });
  } catch (error) {
    console.error('Error in contact endpoint:', error);
    res.status(500).json({ error: '送信に失敗しました' });
  }
};

router.post('/', handleContact);

export default router;
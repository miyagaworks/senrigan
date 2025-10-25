// src/server/config/index.ts
import type { Config } from '../types/config';

export const config: Config = {
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
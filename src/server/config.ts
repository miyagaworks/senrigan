// src/server/config.ts
export const config = {
    smtp: {
      host: process.env.SMTP_HOST || 'sv7122.xserver.jp',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      user: process.env.SMTP_USER || 'info@senrigan.systems',
      password: process.env.SMTP_PASSWORD || 'q8EivcQf',
      from: process.env.SMTP_FROM || 'no-reply@senrigan.systems',
      adminEmail: process.env.ADMIN_EMAIL || 'info@senrigan.systems',
    },
    recaptcha: {
      secretKey: process.env.RECAPTCHA_SECRET_KEY || '',
    }
  };
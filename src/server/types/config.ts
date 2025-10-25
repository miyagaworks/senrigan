// src/server/types/config.ts
export interface SmtpConfig {
    host: string;
    port: number;
    secure: boolean;
    user: string;
    password: string;
    from: string;
    adminEmail: string;
  }
  
  export interface RecaptchaConfig {
    secretKey: string;
  }
  
  export interface Config {
    smtp: SmtpConfig;
    recaptcha: RecaptchaConfig;
  }
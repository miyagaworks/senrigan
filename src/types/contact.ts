// src/types/contact.ts
export interface FormData {
    name: string;
    email: string;
    message: string;
  }
  
  export interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
  }
  
  export interface ContactFormState {
    formData: FormData;
    errors: FormErrors;
    isSubmitting: boolean;
    submitStatus: 'idle' | 'success' | 'error';
  }
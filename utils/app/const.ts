export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "";

export const OLLAMA_HOST =
  process.env.OLLAMA_HOST || 'http://egret-perfect-dane.ngrok-free.app:11434';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "1");
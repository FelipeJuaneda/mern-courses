import dotenv from "dotenv";
const envFile =
  process.env.NODE_ENV === "production" ? ".env.production" : ".env.local";
dotenv.config({ path: envFile });

export const PORT = process.env.PORT || 4000;
export const BASE_URL = process.env.BASE_URL;
export const API_BASE_URL = process.env.API_BASE_URL;
export const mongoDBURL = process.env.MONGODB_URL;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;
export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_TOKEN;
export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASS = process.env.EMAIL_PASS;

if (!mongoDBURL || !TOKEN_SECRET) {
  console.error("Falta configuración esencial en variables de entorno.");
  process.exit(1);
}

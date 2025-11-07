import nodemailer from 'nodemailer';

// Citim variabilele de mediu
const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

if (!host || !port || !user || !pass) {
  throw new Error('Variabilele SMTP (HOST, PORT, USER, PASS) nu sunt setate corect în .env');
}

// Creăm "transportatorul" - mașina care va livra emailurile
export const transporter = nodemailer.createTransport({
  host: host,
  port: parseInt(port, 10),
  secure: true, // true pentru portul 465 (SSL), false pentru altele
  auth: {
    user: user,
    pass: pass,
  },
});
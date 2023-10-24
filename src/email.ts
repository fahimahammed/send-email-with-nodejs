import { createTransport } from 'nodemailer';
require('dotenv').config();

export async function sendEmail(
    to: string,
    subject: string,
    html: string
): Promise<void> {
    const transporter = createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.HOST_EMAIL,
            pass: process.env.APP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.HOST_EMAIL,
        to,
        subject,
        html,
    };

    await transporter.sendMail(mailOptions);
}
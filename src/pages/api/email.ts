import type { NextApiRequest, NextApiResponse } from "nextjs";
import nodemailer from "nodemailer";

type Data = { message: string } | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { to, subject, html } = req.body as {
    to: string;
    subject: string;
    html: string;
  };

  if (!to || !subject || !html) {
    return res.status(400).json({ error: "Missing email payload" });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Ahlcon School" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Message sent:", info.messageId);
    return res.status(200).json({ message: "Email sent: " + info.messageId });
  } catch (err: any) {
    console.error("SMTP error:", err);
    return res.status(500).json({ error: err.message || "Internal Server Error" });
  }
}

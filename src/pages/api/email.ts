import type { NextApiRequest, NextApiResponse } from "nextjs";
import { sendEmail } from "../../lib/sendEmail";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  const { to, subject, html } = req.body;

  try {
    await sendEmail(to, subject, html);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
}

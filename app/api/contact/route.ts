import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS exists:", Boolean(process.env.EMAIL_PASS));

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Kontakt" <${process.env.EMAIL_USER}>`,
      to: "ammelymm@gmail.com",
      replyTo: data.email,
      subject: `Neue Kontaktanfrage von ${data.name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Unternehmen:</strong> ${data.company || "-"}</p>
        <p><strong>E-Mail:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone || "-"}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${data.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
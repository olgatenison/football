import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Tormannschule Anmeldung" <${process.env.EMAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: data.parentEmail,
      subject: `Neue Anmeldung: ${data.childFirstName} ${data.childLastName}`,
      html: `
        <h2>Neue Anmeldung zum Tormanntrainingscamp</h2>

        <h3>Eltern</h3>
        <p>Name: ${data.parentFirstName} ${data.parentLastName}</p>
        <p>E-Mail: ${data.parentEmail}</p>
        <p>Telefon: ${data.parentPhone}</p>

        <h3>Kind</h3>
        <p>Name: ${data.childFirstName} ${data.childLastName}</p>
        <p>Alter: ${data.age}</p>
        <p>Notfallnummer: ${data.emergencyPhone}</p>

        <h3>Anmerkungen</h3>
        <p>${data.notes || "Keine"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "Mail konnte nicht gesendet werden" },
      { status: 500 },
    );
  }
}
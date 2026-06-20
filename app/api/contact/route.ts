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
      subject: `Neue Anmeldung Sommercamp: ${data.childFirstName} ${data.childLastName}`,
      html: `
        <h2>Neue Anmeldung zum Tormanntrainingscamp</h2>

        <h3>Camp</h3>
        <p><strong>Termin:</strong> ${data.camp}</p>
        <p><strong>Ort:</strong> ${data.location}</p>
        <p><strong>Zeit:</strong> ${data.time}</p>

        <h3>Eltern / Erziehungsberechtigte</h3>
        <p><strong>Name:</strong> ${data.parentFirstName} ${data.parentLastName}</p>
        <p><strong>E-Mail:</strong> ${data.parentEmail}</p>
        <p><strong>Telefon:</strong> ${data.parentPhone}</p>

        <h3>Kind / Teilnehmer</h3>
        <p><strong>Name:</strong> ${data.childFirstName} ${data.childLastName}</p>
        <p><strong>Alter:</strong> ${data.age}</p>
        <p><strong>Notfallnummer:</strong> ${data.emergencyPhone}</p>

        <h3>Anmerkungen / Wünsche</h3>
        <p>${data.notes || "Keine Anmerkungen"}</p>

        <p><strong>AGB akzeptiert:</strong> ${data.agb ? "Ja" : "Nein"}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Registration error:", error);

    return NextResponse.json(
      { ok: false, message: "Fehler beim Senden" },
      { status: 500 },
    );
  }
}
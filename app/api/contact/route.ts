import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // à remplacer par ton domaine vérifié
      to: ["elikyabotomba@gmail.com"],            // ← ton adresse email
      replyTo: email,
      subject: subject
        ? `[Portfolio] ${subject}`
        : `[Portfolio] Message de ${name}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 32px; background: #0d0d0d; color: #f2f2f2;">
          <p style="color: #E60000; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 24px;">
            Nouveau message — Portfolio
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #666; font-size: 11px; width: 80px;">NOM</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #666; font-size: 11px;">EMAIL</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; font-size: 14px;">${email}</td>
            </tr>
            ${subject ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #666; font-size: 11px;">SUJET</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; font-size: 14px;">${subject}</td>
            </tr>` : ""}
          </table>

          <p style="color: #666; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">MESSAGE</p>
          <p style="font-size: 14px; line-height: 1.8; white-space: pre-wrap; border-left: 2px solid #E60000; padding-left: 16px; color: #f2f2f2;">
            ${message.replace(/\n/g, "<br>")}
          </p>

          <p style="margin-top: 32px; color: #333; font-size: 11px;">
            Tu peux répondre directement à cet email — il sera envoyé à ${email}
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Erreur lors de l'envoi." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("API error:", err)
    return NextResponse.json(
      { error: "Erreur serveur." },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from "next/server";

/**
 * Stub do endpoint de contato. Hoje apenas valida e responde com sucesso.
 * Para receber os envios de verdade, integre aqui um serviço de e-mail
 * (Resend, SendGrid, Nodemailer + SMTP) ou grave em uma planilha/CRM.
 * Veja instruções no README.md.
 */
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Preencha todos os campos." },
      { status: 400 }
    );
  }

  // TODO: enviar e-mail / salvar lead aqui.
  console.log("Novo contato Luvia:", { name, email, message });

  return NextResponse.json({ ok: true });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }
  try {
    const { name, email, phone, subject, message } = req.body || {}
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Campos obrigatórios ausentes' })
    }

    // TODO: integrar com serviço de e-mail (ex.: nodemailer + SMTP)
    // Exemplo de payload
    const payload = {
      name, email, phone: phone || '', subject: subject || 'Contato do site', message,
      receivedAt: new Date().toISOString(),
    }

    console.log('[contact] Nova mensagem:', payload)

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[contact] Erro:', err)
    return res.status(500).json({ ok: false, error: 'Erro interno' })
  }
}
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Erro ao enviar.')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="container page">
      <h1>Contato</h1>
      <p>Preencha o formulário para solicitar atendimento ou tirar dúvidas.</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="grid-2">
          <div>
            <label>Nome</label>
            <input name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div>
            <label>E-mail</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="grid-2">
          <div>
            <label>Telefone</label>
            <input name="phone" value={form.phone} onChange={handleChange} />
          </div>
          <div>
            <label>Assunto</label>
            <input name="subject" value={form.subject || ''} onChange={handleChange} />
          </div>
        </div>
        <div>
          <label>Mensagem</label>
          <textarea name="message" rows={5} value={form.message} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Enviar'}
        </button>
        {status === 'success' && <p className="success">Mensagem enviada com sucesso!</p>}
        {status === 'error' && <p className="error">Ocorreu um erro. Tente novamente.</p>}
      </form>
    </div>
  )
}
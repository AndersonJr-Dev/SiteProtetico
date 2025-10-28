import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-content">
          <h1>Próteses dentárias com precisão e cuidado</h1>
          <p>
            Atendimento particular e humanizado, com soluções sob medida para devolver função e
            estética ao seu sorriso. Helson Prótetico une técnica e conforto em cada etapa.
          </p>
          <div className="actions">
            <Link to="/contato" className="btn btn-primary">Agendar contato</Link>
            <Link to="/servicos" className="btn btn-secondary">Conhecer serviços</Link>
          </div>
        </div>
      </section>

      <section className="highlights container">
        <div className="card-grid">
          <div className="card">
            <h3>Conforto</h3>
            <p>Processos pensados para o seu conforto em cada etapa.</p>
          </div>
          <div className="card">
            <h3>Acolhimento</h3>
            <p>Atendimento humanizado e acolhedor, com atenção aos detalhes.</p>
          </div>
          <div className="card">
            <h3>Segurança</h3>
            <p>Materiais de qualidade e técnicas atualizadas para sua segurança.</p>
          </div>
        </div>
      </section>

      <section className="container">
        <h2>Serviços em destaque</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Prótese Fixa</h3>
            <p>Restauração de dentes com coroas e pontes fixas.</p>
          </div>
          <div className="card">
            <h3>Prótese Removível</h3>
            <p>Parciais e totais para reposição funcional e estética.</p>
          </div>
          <div className="card">
            <h3>Ajustes e Reparos</h3>
            <p>Manutenções e adaptações para melhor encaixe e conforto.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default function Clinic() {
  return (
    <div className="container page">
      <h1>Consultório</h1>
      <p>
        Ambiente preparado para oferecer qualidade, segurança e precisão em todas as etapas
        de produção das próteses. Utilizamos materiais e técnicas atualizadas.
      </p>
      <p>
        Em breve, você poderá editar aqui o endereço e detalhes do consultório.
      </p>

      <h2>Estrutura</h2>
      <div className="card-grid">
        <div className="card">
          <img src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Atendimento odontológico humanizado" />
          <h4>Atendimento Humanizado</h4>
          <p>Ambiente pensado para conforto e segurança durante o atendimento.</p>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/3779693/pexels-photo-3779693.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Equipamentos de precisão em prótese" />
          <h4>Equipamentos de Precisão</h4>
          <p>Ferramentas modernas que garantem qualidade e durabilidade das próteses.</p>
        </div>
        <div className="card">
          <img src="https://images.pexels.com/photos/3779704/pexels-photo-3779704.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Laboratório protético" />
          <h4>Laboratório Próprio</h4>
          <p>Processos ágeis e controle de qualidade em cada etapa.</p>
        </div>
      </div>
    </div>
  )
}
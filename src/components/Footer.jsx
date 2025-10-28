export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Helson Prótetico</h4>
          <p>Prótese dentária sob medida, unindo técnica, estética e conforto.</p>
        </div>
        <div>
          <h4>Contato</h4>
          <p>Telefone: [editar]</p>
          <p>E-mail: [editar]</p>
          <p>Endereço: [editar]</p>
        </div>
        <div>
          <h4>Horários</h4>
          <p>Atendimento todos os dias, por agendamento.</p>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Helson Prótetico • Todos os direitos reservados</div>
    </footer>
  )
}
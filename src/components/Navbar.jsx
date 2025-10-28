import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <div className="brand">
          <NavLink to="/">Helson Prótetico</NavLink>
          <span className="brand-sub">Soluções em Prótese Dentária</span>
        </div>
        <nav className="nav">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
          <NavLink to="/consultorio">Consultório</NavLink>
          <NavLink to="/contato" className="cta">Contato</NavLink>
        </nav>
      </div>
    </header>
  )
}
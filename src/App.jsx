import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Clinic from './pages/Clinic'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/sobre" element={<About />} />
           <Route path="/servicos" element={<Services />} />
           <Route path="/consultorio" element={<Clinic />} />
           <Route path="/contato" element={<Contact />} />
         </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

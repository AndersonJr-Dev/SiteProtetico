# 🦷 Helson Prótetico - Site Institucional

Site institucional moderno e responsivo para laboratório de prótese dentária, desenvolvido com React + Vite e integração com Vercel para deploy automático.

## 📋 Sobre o Projeto

O **Helson Prótetico** é um site institucional focado em apresentar serviços especializados em prótese dentária, oferecendo uma experiência visual moderna e profissional para pacientes e parceiros.

### ✨ Características Principais

- **Design Responsivo**: Layout adaptável para desktop, tablet e mobile
- **Paleta Profissional**: Cores em teal, amber e slate para transmitir confiança
- **Tipografia Moderna**: Google Fonts (Inter + Poppins) para legibilidade
- **Imagens Ilustrativas**: Fotos do Pexels para demonstrar serviços e estrutura
- **Formulário de Contato**: Integração com API serverless para envio de mensagens
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🚀 Tecnologias Utilizadas

- **Frontend**: React 18 + Vite
- **Roteamento**: React Router DOM
- **Estilização**: CSS3 com variáveis customizadas
- **Backend**: Node.js (Serverless Functions)
- **Deploy**: Vercel
- **Versionamento**: Git + GitHub

## 📁 Estrutura do Projeto

```
siteProteticoHelson/
├── api/
│   └── contact.js          # Função serverless para formulário
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Barra de navegação
│   │   └── Footer.jsx      # Rodapé institucional
│   ├── pages/
│   │   ├── Home.jsx        # Página inicial com hero
│   │   ├── About.jsx       # Sobre o laboratório
│   │   ├── Services.jsx    # Serviços oferecidos
│   │   ├── Clinic.jsx      # Estrutura do consultório
│   │   └── Contact.jsx     # Formulário de contato
│   ├── App.jsx             # Componente principal
│   ├── index.css           # Estilos globais
│   └── main.jsx            # Ponto de entrada
├── vercel.json             # Configuração Vercel
└── package.json            # Dependências do projeto
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para rodar localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/AndersonJr-Dev/SiteProtetico.git
   cd SiteProtetico
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build localmente
- `npm run lint` - Executa linting do código

## 🌐 Deploy

O projeto está configurado para deploy automático na **Vercel**:

1. **Conecte o repositório** na dashboard da Vercel
2. **Configure as variáveis** (se necessário para email)
3. **Deploy automático** a cada push na branch `main`

### Configuração Vercel
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: 18.x

## 📧 Funcionalidades

### Páginas Implementadas
- **Início**: Hero section com call-to-action
- **Sobre**: História e missão do laboratório  
- **Serviços**: Prótese fixa, removível, sobre implante, ajustes e planejamento
- **Consultório**: Estrutura, equipamentos e laboratório próprio
- **Contato**: Formulário integrado com API

### Formulário de Contato
- Validação client-side
- Envio via API serverless (`/api/contact`)
- Campos: nome, email, telefone, mensagem
- Feedback visual de sucesso/erro

## 🎨 Customização

### Paleta de Cores
```css
:root {
  --primary: #0f766e;      /* Teal 700 */
  --primary-light: #0e7490; /* Cyan 700 */
  --accent: #f59e0b;       /* Amber 500 */
  --text: #1f2937;         /* Gray 800 */
  --text-light: #6b7280;   /* Gray 500 */
  --background: #f9fafb;   /* Gray 50 */
}
```

### Fontes
- **Títulos**: Poppins (600, 700)
- **Corpo**: Inter (400, 500)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Helson Prótetico**
- 📧 Email: [editar]
- 📱 Telefone: [editar]  
- 📍 Endereço: [editar]

---

Desenvolvido para oferecer a melhor experiência em prótese dentária.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dra. Beatriz Demarchi | Harmonização Facial e Íntima",
  description:
    "Harmonização facial e íntima feminina com naturalidade, planejamento e atendimento humanizado em Dourados, MS.",
};

const whatsapp =
  "https://wa.me/5518996317665?text=Ol%C3%A1%2C%20Dra.%20Beatriz!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

const treatments = [
  {
    number: "01",
    title: "Harmonização facial",
    text: "Planejamento global e individualizado para equilibrar proporções, suavizar sinais do tempo e valorizar a identidade de cada rosto.",
    tags: "Contorno · Sustentação · Perfil",
  },
  {
    number: "02",
    title: "Lábios & expressão",
    text: "Definição, hidratação e volume na medida certa, respeitando a anatomia e a delicadeza dos seus traços.",
    tags: "Preenchimento labial · Naturalidade",
  },
  {
    number: "03",
    title: "Harmonização íntima",
    text: "Cuidado feminino acolhedor, discreto e personalizado, com foco em bem-estar, segurança e confiança.",
    tags: "Acolhimento · Privacidade · Bem-estar",
  },
];

const testimonials = [
  {
    quote:
      "Profissional muito prestativa, educada e comprometida com seus pacientes.",
    name: "Maria P.",
  },
  {
    quote: "O acompanhamento após os procedimentos é surpreendente!",
    name: "Luis F.",
  },
  {
    quote: "Dra. Beatriz carinhosa e super responsável. Sou paciente fiel!",
    name: "Elaine F.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#inicio" aria-label="Início">
          <span>BD</span>
          <strong>
            Beatriz <i>Demarchi</i>
          </strong>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#resultados">Resultados</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Agendar avaliação <Arrow />
        </a>
      </header>

      <section className="hero" id="inicio">
        <img
          className="hero-image"
          src="/images/beatriz-portrait.png"
          alt="Dra. Beatriz Demarchi"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">Harmonização facial & íntima · Dourados, MS</p>
          <h1>
            Sua beleza,
            <br />
            <em>na sua essência.</em>
          </h1>
          <p className="hero-text">
            Naturalidade, feminilidade e confiança em procedimentos pensados
            para valorizar quem você já é.
          </p>
          <a className="button light-button" href={whatsapp} target="_blank" rel="noreferrer">
            Quero cuidar de mim <Arrow />
          </a>
        </div>
        <div className="hero-side-note">Biomédica Esteta · CRBM 46286</div>
        <a className="scroll-cue" href="#sobre" aria-label="Rolar para conhecer">
          <span>Descubra</span> ↓
        </a>
      </section>

      <section className="manifesto" id="sobre">
        <div className="section-number">01 — Essência</div>
        <div className="manifesto-copy">
          <p className="eyebrow">Um olhar que começa por você</p>
          <h2>
            Estética não é sobre mudar.
            <br />É sobre <em>reconhecer-se.</em>
          </h2>
          <div className="manifesto-text">
            <p>
              A Dra. Beatriz acredita em uma estética que respeita histórias,
              proporções e escolhas. Antes de qualquer procedimento, existe
              escuta, planejamento e uma conversa verdadeira sobre o que faz
              sentido para você.
            </p>
            <p>
              Cada detalhe é conduzido com técnica, delicadeza e acompanhamento
              próximo — para resultados elegantes que preservam sua identidade.
            </p>
          </div>
        </div>
      </section>

      <section className="portrait-break">
        <div className="portrait-card">
          <img src="/images/beatriz-full.png" alt="Dra. Beatriz em retrato profissional" />
        </div>
        <div className="portrait-statement">
          <span className="signature">Beatriz</span>
          <blockquote>
            “Meu propósito é revelar beleza com sutileza — nunca apagar o que
            torna cada mulher única.”
          </blockquote>
          <p>Dra. Beatriz Demarchi · Biomédica Esteta</p>
        </div>
      </section>

      <section className="treatments" id="tratamentos">
        <div className="section-head">
          <div className="section-number">02 — Tratamentos</div>
          <p className="eyebrow">Cuidado pensado em detalhes</p>
          <h2>
            Técnica precisa.
            <br />Resultados <em>sutis.</em>
          </h2>
        </div>
        <div className="treatment-list">
          {treatments.map((item) => (
            <article className="treatment-item" key={item.number}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.tags}</small>
              </div>
              <a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Saber mais sobre ${item.title}`}>
                <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="results" id="resultados">
        <div className="results-intro">
          <div className="section-number light-number">03 — Resultados reais</div>
          <div>
            <p className="eyebrow light">Naturalidade que se percebe</p>
            <h2>
              Mudanças delicadas.
              <br />Confiança <em>renovada.</em>
            </h2>
          </div>
        </div>
        <div className="result-grid">
          <figure className="result-card square-result">
            <img src="/images/resultado-labios.jpeg" alt="Antes e depois de harmonização labial" />
            <figcaption>
              <span>Harmonização labial</span>
              <small>Antes & depois</small>
            </figcaption>
          </figure>
          <figure className="result-card tall-result">
            <img src="/images/resultado-perfil.jpeg" alt="Antes e depois de harmonização facial de perfil" />
            <figcaption>
              <span>Harmonização facial</span>
              <small>Antes & depois</small>
            </figcaption>
          </figure>
        </div>
        <p className="results-note">
          Imagens publicadas com autorização. Cada organismo responde de forma
          individual; resultados não podem ser garantidos.
        </p>
      </section>

      <section className="testimonials">
        <div className="section-head compact-head">
          <div className="section-number">04 — Experiências</div>
          <p className="eyebrow">Quem viveu, compartilha</p>
          <h2>
            Cuidado que deixa
            <br />uma <em>lembrança bonita.</em>
          </h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <blockquote key={item.name}>
              <div className="stars" aria-label="5 estrelas">★★★★★</div>
              <p>“{item.quote}”</p>
              <footer>{item.name} · avaliação no Google</footer>
            </blockquote>
          ))}
        </div>
        <a
          className="google-rating"
          href="https://share.google/wtFcT8o6X7Npu98WC"
          target="_blank"
          rel="noreferrer"
        >
          <strong>5,0</strong>
          <span>★★★★★<br />17 avaliações no Google</span>
          <Arrow />
        </a>
      </section>

      <section className="consultation" id="contato">
        <div className="consultation-image">
          <img src="/images/beatriz-portrait.png" alt="Dra. Beatriz Demarchi" />
        </div>
        <div className="consultation-copy">
          <p className="eyebrow light">Seu momento começa aqui</p>
          <h2>
            Vamos conversar
            <br />sobre <em>você?</em>
          </h2>
          <p>
            Agende uma avaliação individual e descubra um plano de cuidados
            desenhado para seus objetivos, com transparência e acolhimento.
          </p>
          <a className="button light-button" href={whatsapp} target="_blank" rel="noreferrer">
            Agendar pelo WhatsApp <Arrow />
          </a>
          <div className="contact-details">
            <div>
              <span>Endereço</span>
              <p>R. Oliveira Marques, 2855<br />Vila Helena · Dourados, MS</p>
            </div>
            <div>
              <span>Contato</span>
              <p>(18) 99631-7665<br />@drabeatrizdemarchi</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <span>BD</span>
          <strong>Beatriz Demarchi</strong>
        </div>
        <p>Harmonização Facial & Íntima · Dourados, MS</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/drabeatrizdemarchi/" target="_blank" rel="noreferrer">
            Instagram <Arrow />
          </a>
          <a href={whatsapp} target="_blank" rel="noreferrer">
            WhatsApp <Arrow />
          </a>
        </div>
        <small>© 2026 Dra. Beatriz Demarchi · CRBM 46286</small>
      </footer>

      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp">
        <span>Agendar</span> ↗
      </a>
    </main>
  );
}

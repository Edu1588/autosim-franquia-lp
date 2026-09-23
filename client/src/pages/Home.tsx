import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Banknote,
  Check,
  ChevronDown,
  CircleDollarSign,
  Handshake,
  Landmark,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  X,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Zap,
    title: "Autosim Express",
    description: "Compra rápida de veículos — receita imediata no balcão.",
    accent: "orange",
  },
  {
    number: "02",
    icon: Network,
    title: "Autosim Site",
    description: "Intermediação de compra e venda online entre pessoas físicas e lojas parceiras.",
    accent: "blue",
  },
  {
    number: "03",
    icon: Banknote,
    title: "Financiamentos",
    description: "Mais de 12 bancos parceiros para financiar ou refinanciar.",
    accent: "orange",
  },
  {
    number: "04",
    icon: Store,
    title: "Autosim Loja",
    description: "Mesa de negócios entre lojistas — repasse e reposição de estoque.",
    accent: "blue",
  },
];

const steps = [
  "Candidatura e simulação de investimento",
  "Análise de perfil e capital disponível",
  "Treinamento e formatação do negócio",
  "Implantação com equipe dedicada",
  "Operação com suporte contínuo",
];

const faqs = [
  {
    question: "R$ 100–250 mil é um valor alto. Por que investir nesse patamar?",
    answer:
      "Você não está comprando uma loja — está comprando quatro fontes de receita operando ao mesmo tempo (Express, Site, Financiamentos e Loja), num mercado nacional em expansão.",
  },
  {
    question: "Nunca ouvi falar da Autosim. Como sei que é sério?",
    answer:
      "A matriz opera em Campinas com equipe própria de expansão, implantação e suporte jurídico. O franqueado não abre a unidade sozinho.",
  },
  {
    question: "É melhor esperar a marca crescer mais antes de entrar?",
    answer:
      "O Projeto 10 é justamente para quem quer entrar na formação da rede — os primeiros franqueados capturam o melhor território antes da fase de crescimento exponencial.",
  },
  {
    question: "Não entendo do ramo automotivo. Consigo operar?",
    answer:
      "Sim. O franqueado gerencia o negócio com treinamento continuado e equipe operacional de implantação — não é preciso ser especialista em carros.",
  },
  {
    question: "E se eu não conseguir manter o faturamento esperado?",
    answer:
      "O modelo combina receita imediata (Express), intermediação (Site), financiamento e repasse entre lojistas — reduzindo a dependência de uma única frente de vendas.",
  },
];

function AutosimMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`autosim-mark ${light ? "is-light" : ""}`} aria-label="Autosim">
      <span className="autosim-mark__symbol">
        <span />
      </span>
      <span className="autosim-mark__word">AUTOSIM</span>
    </span>
  );
}

function SectionEyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`section-eyebrow ${light ? "section-eyebrow--light" : ""}`}>
      <span className="section-eyebrow__line" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const capital = String(data.get("capital") ?? "");
    const experience = String(data.get("experience") ?? "");

    if (!name || !phone || !capital || !experience) {
      setFormError("Preencha todos os campos para continuar.");
      return;
    }

    setFormError("");
    setSubmitted(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand-link" href="#top" onClick={closeMenu}>
            <AutosimMark />
          </a>
          <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`} aria-label="Navegação principal">
            <a href="#modelo" onClick={closeMenu}>O modelo</a>
            <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
            <a href="#investimento" onClick={closeMenu}>Investimento</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="nav-cta" href="#qualificacao" onClick={closeMenu}>Simular investimento <ArrowRight size={15} /></a>
          </nav>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-section__orb hero-section__orb--top" />
          <div className="hero-section__orb hero-section__orb--bottom" />
          <div className="dot-grid dot-grid--hero" />
          <div className="container hero-section__inner">
            <div className="hero-copy">
              <SectionEyebrow light>Franquia Autosim · Projeto 10</SectionEyebrow>
              <h1>Uma franquia com <em>4 fontes de receita</em> no maior mercado de compra e venda de veículos do Brasil</h1>
              <p className="hero-copy__lead">Express, Site, Financiamentos e Loja — tudo dentro de uma única operação, com suporte completo da franqueadora do início à operação.</p>
              <div className="hero-bullets">
                <span><Check size={15} /> 4 fontes de receita</span>
                <span><Check size={15} /> Suporte completo da franqueadora</span>
                <span><Check size={15} /> Modelo validado, em expansão nacional</span>
              </div>
              <div className="hero-actions">
                <a className="button button--primary" href="#qualificacao">Simular investimento <ArrowUpRightIcon /></a>
                <a className="button button--ghost" href="#faq">Ver perguntas frequentes <ArrowDownRight size={16} /></a>
              </div>
              <div className="hero-note"><ShieldCheck size={15} /> Candidaturas avaliadas por região e perfil</div>
            </div>
            <div className="hero-visual" aria-label="Visual de um veículo em um showroom Autosim">
              <div className="hero-visual__frame">
                <div className="hero-visual__wash" />
                <img className="hero-visual__image" src="/manus-storage/autosim-hero_ac220d8c.jpg" alt="Veículo em um showroom premium" />
                <div className="hero-visual__fallback" aria-hidden="true">
                  <div className="car-shape"><span className="car-shape__window" /><span className="car-shape__body" /><i /><i /></div>
                </div>
                <div className="hero-visual__label"><span className="status-dot" /> Um modelo. Quatro motores.</div>
              </div>
              <div className="hero-visual__caption"><span>01 / 04</span><span>O mercado não para.</span></div>
            </div>
          </div>
          <div className="hero-scroll"><span>Deslize para explorar</span><span className="hero-scroll__line" /></div>
        </section>

        <section className="opportunity-strip" aria-label="Destaques do modelo">
          <div className="container opportunity-strip__inner">
            <div className="opportunity-strip__intro"><span className="opportunity-strip__slash">/</span><span>Uma única operação.<br /><strong>Mais possibilidades de receita.</strong></span></div>
            <div className="opportunity-strip__items">
              <span><TrendingUp size={18} /> Mercado em expansão</span>
              <span><Users size={18} /> Suporte especializado</span>
              <span><Handshake size={18} /> Rede nacional</span>
            </div>
          </div>
        </section>

        <section className="problem-section section-padding">
          <div className="container problem-section__grid">
            <div className="problem-section__visual">
              <span className="problem-section__giant">01</span>
              <div className="problem-section__quote"><span className="quote-mark">“</span><p>Negócio de receita única trava quando o mercado esfria.</p></div>
              <div className="problem-section__bars"><span /><span /><span /><span /><span /></div>
            </div>
            <div className="problem-section__copy">
              <SectionEyebrow>O problema</SectionEyebrow>
              <h2>Negócio de receita única trava quando o mercado esfria</h2>
              <p>Empreender sozinho é caro, arriscado e sem suporte. A maioria das franquias entrega uma única forma de faturar — e some do radar assim que o cenário muda.</p>
              <p>A Autosim nasceu para resolver isso de um jeito diferente: uma operação com quatro motores de receita rodando ao mesmo tempo, num mercado que não para de crescer.</p>
              <div className="inline-highlight"><CircleDollarSign size={22} /><span><strong>Uma estrutura pensada para reduzir a dependência</strong> de uma única frente de vendas.</span></div>
            </div>
          </div>
        </section>

        <section className="pillars-section section-padding" id="modelo">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div><SectionEyebrow>O modelo Autosim</SectionEyebrow><h2>4 pilares, <em>uma só</em> unidade franqueada</h2></div>
              <p>Um ecossistema de compra, venda, crédito e relacionamento que trabalha junto para transformar oportunidade em negócio.</p>
            </div>
            <div className="pillar-grid">
              {pillars.map(({ number, icon: Icon, title, description, accent }) => (
                <article className={`pillar-card pillar-card--${accent}`} key={number}>
                  <div className="pillar-card__top"><span className="pillar-card__number">{number}</span><Icon size={24} strokeWidth={1.5} /></div>
                  <div className="pillar-card__content"><h3>{title}</h3><p>{description}</p></div>
                  <span className="pillar-card__arrow"><ArrowUpRightIcon /></span>
                </article>
              ))}
            </div>
            <div className="pillars-bottom"><span className="pillars-bottom__line" /><span>Receita diversificada, operação conectada.</span><span className="pillars-bottom__line" /></div>
          </div>
        </section>

        <section className="process-section section-padding" id="como-funciona">
          <div className="process-section__texture" />
          <div className="container">
            <div className="section-heading section-heading--light process-heading"><div><SectionEyebrow light>O caminho</SectionEyebrow><h2>Da candidatura <em>à operação</em></h2></div><p>Você não precisa descobrir sozinho. A Autosim acompanha cada etapa para transformar decisão em unidade funcionando.</p></div>
            <div className="process-list">
              {steps.map((step, index) => (
                <div className="process-step" key={step}><span className="process-step__number">0{index + 1}</span><span className="process-step__dot" /><p>{step}</p>{index < steps.length - 1 && <span className="process-step__connector" />}</div>
              ))}
            </div>
            <div className="process-footer"><span><Sparkles size={15} /> Método, suporte e execução</span><span>Uma jornada acompanhada do início ao crescimento.</span></div>
          </div>
        </section>

        <section className="proof-section section-padding">
          <div className="container">
            <div className="section-heading"><SectionEyebrow>Expansão da rede</SectionEyebrow><h2>Um projeto <em>nacional</em> de expansão</h2><p>Matriz em Campinas (SP), com equipe de expansão, implantação e suporte jurídico e de marketing dedicados a cada unidade.</p></div>
            <div className="stats-grid">
              <div className="stat-card stat-card--featured"><span className="stat-card__value">10</span><span className="stat-card__label">Projeto 10 — kick-off de sucesso</span><span className="stat-card__corner">/ 01</span></div>
              <div className="stat-card"><span className="stat-card__value">100<span>+</span></span><span className="stat-card__label">unidades na sequência de expansão</span></div>
              <div className="stat-card"><span className="stat-card__value">12<span>+</span></span><span className="stat-card__label">bancos parceiros de financiamento</span></div>
              <div className="stat-card"><span className="stat-card__value stat-card__value--text">BR</span><span className="stat-card__label">projeto de presença nacional</span></div>
            </div>
          </div>
        </section>

        <section className="offer-section section-padding" id="investimento">
          <div className="container offer-section__grid">
            <div className="offer-copy"><SectionEyebrow>O seu próximo negócio</SectionEyebrow><h2>Um negócio com capital e retorno em <em>múltiplas frentes</em></h2><p>O investimento posiciona você dentro de uma estrutura validada, replicável e pronta para operar com suporte.</p><ul className="offer-list"><li><Check size={17} /> 4 fontes de receita na mesma estrutura</li><li><Check size={17} /> Suporte completo da franqueadora</li><li><Check size={17} /> Território em fase de expansão prioritária</li><li><Check size={17} /> Formatação e expertise replicáveis</li></ul><div className="offer-quote"><span>“</span><p>O melhor momento para escolher território é antes da expansão exponencial.</p></div></div>
            <div className="qualification-card" id="qualificacao">
              {!submitted ? <>
                <div className="qualification-card__header"><span className="qualification-card__eyebrow">Simule sua unidade</span><h3>Investimento inicial</h3><div className="qualification-card__price">R$ 100 mil <span>—</span> R$ 250 mil</div><p>Responda 4 perguntas. O time de expansão entra em contato com o próximo passo.</p></div>
                <form onSubmit={handleSubmit} className="qualification-form">
                  <label>Nome completo<input name="name" type="text" placeholder="Como podemos chamar você?" /></label>
                  <label>Telefone / WhatsApp<input name="phone" type="tel" placeholder="(00) 00000-0000" /></label>
                  <fieldset><legend>Você tem capital disponível a partir de R$ 100 mil?</legend><label className="radio-option"><input type="radio" name="capital" value="available" /><span>Sim, tenho disponível</span></label><label className="radio-option"><input type="radio" name="capital" value="raising" /><span>Em captação / organizando</span></label><label className="radio-option"><input type="radio" name="capital" value="not-yet" /><span>Não, ainda não</span></label></fieldset>
                  <fieldset><legend>Já teve negócio próprio ou experiência no varejo automotivo?</legend><div className="radio-inline"><label className="radio-option"><input type="radio" name="experience" value="yes" /><span>Sim</span></label><label className="radio-option"><input type="radio" name="experience" value="no" /><span>Não</span></label></div></fieldset>
                  {formError && <p className="form-error" role="alert">{formError}</p>}
                  <button className="button button--primary button--full" type="submit">Quero simular meu investimento <ArrowRight size={17} /></button>
                  <small className="form-privacy"><ShieldCheck size={13} /> Seus dados ficam protegidos e serão usados apenas pela equipe Autosim.</small>
                </form>
              </> : <div className="qualification-success"><div className="success-icon"><Check size={28} /></div><span className="qualification-card__eyebrow">Candidatura recebida</span><h3>O próximo passo começa agora.</h3><p>Obrigado pelo interesse na Autosim. Nosso time de expansão vai analisar seu perfil e entrar em contato em breve.</p><a className="button button--dark" href="#top">Voltar ao início <ArrowUpRightIcon /></a></div>}
            </div>
          </div>
        </section>

        <section className="faq-section section-padding" id="faq">
          <div className="container faq-section__grid"><div className="faq-intro"><SectionEyebrow>Perguntas frequentes</SectionEyebrow><h2>Antes de dar o <em>próximo passo</em></h2><p>As respostas para as objeções mais comuns de quem está avaliando entrar na rede Autosim.</p><a href="#qualificacao" className="text-link">Ainda tem dúvidas? Fale com o time <ArrowRight size={16} /></a></div><div className="faq-list">{faqs.map((faq, index) => <details className="faq-item" key={faq.question} open={index === 0}><summary>{faq.question}<ChevronDown size={18} /></summary><p>{faq.answer}</p></details>)}</div></div>
        </section>

        <section className="final-cta-section section-padding">
          <div className="final-cta-section__ring" /><div className="dot-grid dot-grid--final" />
          <div className="container final-cta"><SectionEyebrow light>Projeto 10 · Autosim</SectionEyebrow><h2>Converse com o time de expansão e <em>simule sua unidade</em></h2><p>Vagas prioritárias do Projeto 10 limitadas por região.</p><a className="button button--primary button--large" href="#qualificacao">Quero simular meu investimento <ArrowUpRightIcon /></a><span className="final-cta__urgency"><span className="status-dot" /> Território em fase de expansão prioritária — candidaturas avaliadas por ordem de chegada.</span></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container site-footer__inner"><AutosimMark light /><span>Inovação para comprar. Facilidade para vender.</span><span>© 2026 Autosim</span></div></footer>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowUpRight size={17} />;
}

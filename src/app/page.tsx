"use client";

import { ArrowDownRight, ArrowRight, Menu, MoveUpRight, X } from "lucide-react";
import { useState } from "react";

const services = [
  ["01", "Engenharia", "Análise técnica e soluções pensadas para cada contexto construtivo."],
  ["02", "Estruturas metálicas", "Estruturas desenvolvidas para unir desempenho, precisão e presença arquitetônica."],
  ["03", "Projetos estruturais", "Clareza de projeto para orientar decisões e tornar a execução mais segura."],
  ["04", "Soluções personalizadas", "Respostas sob medida para desafios que pedem atenção ao detalhe."],
];

const projects = [
  { title: "Estrutura industrial", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85" },
  { title: "Sistema em aço", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85" },
  { title: "Ritmo construtivo", image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85" },
];

function Brand() {
  return <img className="brand-logo" src="/brand/n-hauser-logo.jpeg" alt="N.Hauser — Engenharia e Estruturas" />;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const nav = ["A empresa", "Serviços", "Projetos", "Contato"];
  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <a href="#inicio" aria-label="N.Hauser — início"><Brand /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">{nav.map((item) => <a href={`#${item.toLowerCase().replace(" ", "-")}`} key={item}>{item}</a>)}</nav>
        <a className="header-cta" href="#contato">Solicitar orçamento <ArrowRight size={16} aria-hidden="true" /></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </header>
      {open && <nav className="mobile-nav" aria-label="Navegação móvel">{nav.map((item) => <a onClick={() => setOpen(false)} href={`#${item.toLowerCase().replace(" ", "-")}`} key={item}>{item}</a>)}<a onClick={() => setOpen(false)} href="#contato">Solicitar orçamento</a></nav>}
      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" /><div className="hero-media" role="img" aria-label="Estrutura metálica de grande escala sob luz natural" /><div className="hero-overlay" />
          <div className="hero-content wrap"><p className="eyebrow light">N.HAUSER / ENGENHARIA E ESTRUTURAS</p><h1>Estruturas que<br /><i>transformam</i> projetos.</h1><div className="hero-bottom"><p>Soluções em engenharia e estruturas metálicas com precisão, qualidade e compromisso em cada detalhe.</p><div className="hero-actions"><a className="button primary" href="#serviços">Conheça nossas soluções <ArrowRight size={18} /></a><a className="button ghost" href="#contato">Solicite um orçamento</a></div></div></div>
          <div className="hero-meta">ESTRUTURA / PRECISÃO <span>SCROLL <ArrowDownRight size={15} /></span></div>
        </section>
        <section className="intro section wrap" id="a-empresa"><div><p className="eyebrow red">01 / A EMPRESA</p></div><div className="intro-copy"><h2>Projetar é dar forma à <em>confiança.</em></h2><p>A N.Hauser atua no encontro entre rigor técnico e visão construtiva. Cada demanda é tratada como única, com atenção à viabilidade, aos materiais e à clareza de cada etapa.</p><a className="text-link" href="/empresa">Conheça a N.Hauser <ArrowRight size={17} /></a></div></section>
        <section className="services" id="serviços"><div className="wrap services-head"><p className="eyebrow light">02 / O QUE FAZEMOS</p><h2>Precisão que se vê<br />na estrutura.</h2></div><div className="services-list wrap">{services.map(([number, title, text]) => <article className="service" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight aria-hidden="true" /></article>)}</div></section>
        <section className="signature" aria-label="A precisão é a nossa assinatura"><div className="signature-lines" aria-hidden="true"><span /><span /><span /><span /><span /></div><div className="signature-content wrap"><p className="eyebrow">N.HAUSER / MÉTODO</p><h2>Entre o cálculo<br />e a <em>matéria.</em></h2><p>Uma estrutura bem resolvida não precisa chamar atenção para si. Ela sustenta o que importa — com ordem, precisão e intenção.</p></div></section>
        <section className="projects section wrap" id="projetos"><div className="section-title"><div><p className="eyebrow red">03 / PROJETOS</p><h2>Matéria em<br /><em>movimento.</em></h2></div><p>Uma seleção visual de referências de linguagem. Projetos executados pela N.Hauser serão adicionados após a confirmação dos dados e autorizações.</p></div><div className="project-grid">{projects.map((project, index) => <article className={`project project-${index + 1}`} key={project.title}><img src={project.image} alt="" loading="lazy" /><div className="project-shade" /><div className="project-info"><span>Imagem conceitual</span><h3>{project.title}</h3><MoveUpRight size={22} aria-hidden="true" /></div></article>)}</div><a className="text-link projects-link" href="/projetos">Ver todos os projetos <ArrowRight size={17} /></a></section>
        <section className="principles section wrap"><p className="eyebrow red">04 / DIFERENCIAIS</p><div className="principles-grid"><h2>Clareza em cada<br />decisão estrutural.</h2><div>{[["Precisão","Atenção técnica desde a leitura da necessidade até os detalhes de execução."],["Planejamento","Processos bem definidos para orientar decisões com mais segurança e clareza."],["Qualidade","Critério na escolha de caminhos, materiais e soluções para cada desafio."],["Confiança","Relações construídas com diálogo direto e compromisso com o projeto."]].map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
        <section className="final-cta" id="contato"><div className="wrap"><p className="eyebrow light">05 / CONTATO</p><h2>Vamos construir<br />o seu próximo <em>projeto?</em></h2><p className="final-note">O canal de atendimento será configurado assim que o contato oficial for fornecido.</p><a className="button light-button" href="/contato">Iniciar uma conversa <ArrowRight size={18} /></a></div></section>
      </main>
      <footer className="footer wrap"><Brand /><div><p>N.HAUSER<br />ENGENHARIA E ESTRUTURAS</p><small>© {new Date().getFullYear()} N.Hauser. Todos os direitos reservados.</small></div><a href="#inicio">Voltar ao topo <MoveUpRight size={16} /></a></footer>
    </div>
  );
}

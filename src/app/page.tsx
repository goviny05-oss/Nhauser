"use client";

import { ArrowDownRight, ArrowRight, Menu, MoveUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  ["01", "Galpões em estrutura metálica", "Soluções estruturais para espaços industriais, comerciais e rurais."],
  ["02", "Coberturas", "Coberturas metálicas desenvolvidas de acordo com as necessidades do projeto."],
  ["03", "Mezaninos", "Estruturas para ampliar e organizar áreas úteis com planejamento técnico."],
  ["04", "Escadas, guarda-corpos e corrimãos", "Elementos metálicos funcionais para circulação e proteção."],
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
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], .services-head, .service, .section-title, .project, .principles-grid, .final-cta .wrap"));
    items.forEach((item) => item.setAttribute("data-reveal", ""));
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);
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
          <div className="hero-content wrap"><p className="eyebrow light">N.HAUSER / ENGENHARIA E ESTRUTURAS</p><h1>Engenharia e<br /><i>estruturas metálicas.</i></h1><div className="hero-bottom"><p>Projetos estruturais e soluções sob medida, com clareza técnica do planejamento à execução.</p><div className="hero-actions"><a className="button primary" href="#serviços">Conheça nossas soluções <ArrowRight size={18} /></a><a className="button ghost" href="#contato">Solicite um orçamento</a></div></div></div>
          <div className="hero-meta">ESTRUTURA / PRECISÃO <span>SCROLL <ArrowDownRight size={15} /></span></div>
        </section>
        <section className="intro section wrap" id="a-empresa"><div><p className="eyebrow red">01 / A EMPRESA</p></div><div className="intro-copy" data-reveal><h2>Projetar é dar forma à <em>confiança.</em></h2><p>A N.Hauser atua no encontro entre rigor técnico e visão construtiva. Cada demanda é tratada como única, com atenção à viabilidade, aos materiais e à clareza de cada etapa.</p><a className="text-link" href="/empresa">Conheça a N.Hauser <ArrowRight size={17} /></a></div></section>
        <section className="services" id="serviços"><div className="wrap services-head"><p className="eyebrow light">02 / O QUE FAZEMOS</p><h2>Precisão que se vê<br />na estrutura.</h2></div><div className="services-list wrap">{services.map(([number, title, text]) => <article className="service" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight aria-hidden="true" /></article>)}</div></section>
        <section className="process section" aria-label="Como atuamos"><div className="wrap process-layout" data-reveal><div><p className="eyebrow red">03 / COMO ATUAMOS</p><h2>Do projeto à execução,<br /><em>com clareza.</em></h2><p>Para cada demanda, a N.Hauser organiza as etapas técnicas necessárias antes da fabricação e da montagem.</p></div><ol className="process-steps"><li><span>01</span><div><h3>Entendimento da demanda</h3><p>Leitura do espaço, da necessidade e do objetivo do projeto.</p></div></li><li><span>02</span><div><h3>Projeto e planejamento</h3><p>Definição da solução estrutural e dos detalhes de execução.</p></div></li><li><span>03</span><div><h3>Fabricação e montagem</h3><p>Produção e instalação de acordo com o projeto definido.</p></div></li></ol></div></section>
        <section className="projects section wrap" id="projetos"><div className="section-title"><div><p className="eyebrow red">04 / PROJETOS</p><h2>Referências de<br /><em>estrutura.</em></h2></div><p>Imagens conceituais de estruturas metálicas. O portfólio da N.Hauser será incluído com obras e informações autorizadas.</p></div><div className="project-grid">{projects.map((project, index) => <article className={`project project-${index + 1}`} key={project.title}><img src={project.image} alt="" loading="lazy" /><div className="project-shade" /><div className="project-info"><span>Imagem conceitual</span><h3>{project.title}</h3><MoveUpRight size={22} aria-hidden="true" /></div></article>)}</div><a className="text-link projects-link" href="/projetos">Ver projetos <ArrowRight size={17} /></a></section>
        <section className="principles section wrap"><p className="eyebrow red">05 / DIFERENCIAIS</p><div className="principles-grid"><h2>Clareza em cada<br />decisão estrutural.</h2><div>{[["Precisão","Atenção técnica desde a leitura da necessidade até os detalhes de execução."],["Planejamento","Processos bem definidos para orientar decisões com mais segurança e clareza."],["Qualidade","Critério na escolha de caminhos, materiais e soluções para cada desafio."],["Atendimento direto","Comunicação objetiva para tratar cada projeto de forma próxima."]].map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
        <section className="final-cta" id="contato"><div className="wrap"><p className="eyebrow light">06 / CONTATO</p><h2>Fale sobre<br />o seu <em>projeto.</em></h2><div className="contact-summary"><p>Rua Oswaldo Schroeder, 2687<br />Lontras — SC, 89182-000</p><p>Segunda a sexta: 08:00–19:00<br />Sábado: 08:00–12:00</p></div><a className="button light-button" href="https://wa.me/5547992283533" target="_blank" rel="noreferrer">WhatsApp (47) 99228-3533 <ArrowRight size={18} /></a></div></section>
      </main>
      <footer className="footer wrap"><Brand /><div><p>N.HAUSER<br />ENGENHARIA E ESTRUTURAS</p><small>Lontras — Santa Catarina · (47) 99228-3533<br />© 2026 N.Hauser. Todos os direitos reservados.</small></div><a href="#inicio">Voltar ao topo <MoveUpRight size={16} /></a></footer>
    </div>
  );
}

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

const pages = {
  empresa: { eyebrow: "A EMPRESA", title: "Engenharia que parte da escuta.", text: "A N.Hauser trabalha com engenharia e estruturas metálicas a partir de uma leitura cuidadosa de cada necessidade. Informações institucionais, histórico e equipe serão incluídos após validação da empresa." },
  servicos: { eyebrow: "SERVIÇOS", title: "Soluções com direção técnica.", text: "Engenharia, estruturas metálicas, projetos estruturais e soluções personalizadas. Os escopos específicos de atendimento serão detalhados após a confirmação da N.Hauser." },
  projetos: { eyebrow: "PROJETOS", title: "Uma página em construção.", text: "Os projetos realizados pela N.Hauser serão apresentados aqui quando houver imagens, dados técnicos e autorizações de publicação confirmados." },
  contato: { eyebrow: "CONTATO", title: "Vamos começar pelo seu projeto.", text: "O WhatsApp, telefone, e-mail, localização e área de atendimento serão configurados nesta página assim que os canais oficiais forem disponibilizados." },
} as const;

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const content = pages[section as keyof typeof pages];
  if (!content) notFound();
  return <main className="inner-page"><header className="inner-header wrap"><Link href="/" aria-label="Voltar à página inicial"><img className="brand-logo" src="/brand/n-hauser-logo.jpeg" alt="N.Hauser — Engenharia e Estruturas" /></Link><Link className="text-link" href="/"><ArrowLeft size={16} /> Início</Link></header><section className="inner-content wrap"><p className="eyebrow red">{content.eyebrow}</p><h1>{content.title}</h1><p>{content.text}</p><Link className="button primary" href="/#contato">Falar com a N.Hauser <ArrowRight size={18} /></Link></section></main>;
}

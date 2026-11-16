import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

const pages = {
  empresa: { eyebrow: "A EMPRESA", title: "Engenharia e estruturas metálicas.", text: "A N.Hauser é especializada em engenharia e estruturas metálicas e mistas. Atua com projetos mecânicos e civis, fabricação e montagem de estruturas personalizadas, conforme a necessidade de cada projeto." },
  servicos: { eyebrow: "SERVIÇOS", title: "Soluções para estruturas metálicas.", text: "Galpões em estrutura metálica, coberturas, mezaninos, escadas, guarda-corpos e corrimãos. A empresa também atua com manutenção preventiva e corretiva, automação, consultoria, projetos mecânicos e civis e emissão de laudos." },
  projetos: { eyebrow: "PROJETOS", title: "Uma página em construção.", text: "Os projetos realizados pela N.Hauser serão apresentados aqui quando houver imagens, dados técnicos e autorizações de publicação confirmados." },
  contato: { eyebrow: "CONTATO", title: "Fale sobre o seu projeto.", text: "Rua Oswaldo Schroeder, 2687, Lontras — SC, 89182-000. Telefone e WhatsApp: (47) 99228-3533. Atendimento de segunda a sexta, das 08:00 às 19:00; sábado, das 08:00 às 12:00." },
} as const;

export function generateStaticParams() {
  return Object.keys(pages).map((section) => ({ section }));
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const content = pages[section as keyof typeof pages];
  if (!content) notFound();
  return <main className="inner-page"><header className="inner-header wrap"><Link href="/" aria-label="Voltar à página inicial"><img className="brand-logo" src="/brand/n-hauser-logo.jpeg" alt="N.Hauser — Engenharia e Estruturas" /></Link><Link className="text-link" href="/"><ArrowLeft size={16} /> Início</Link></header><section className="inner-content wrap"><p className="eyebrow red">{content.eyebrow}</p><h1>{content.title}</h1><p>{content.text}</p><Link className="button primary" href="/#contato">Falar com a N.Hauser <ArrowRight size={18} /></Link></section></main>;
}

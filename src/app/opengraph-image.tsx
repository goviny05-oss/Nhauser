import { ImageResponse } from "next/og";

export const alt = "N.Hauser — Engenharia e Estruturas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const logo = new URL("../../public/brand/n-hauser-logo.jpeg", import.meta.url).toString();

  return new ImageResponse(
    <div style={{ background: "#111315", color: "#fafaf8", display: "flex", height: "100%", overflow: "hidden", padding: "72px", position: "relative", width: "100%" }}>
      <div style={{ background: "#f5080c", bottom: "-180px", height: "760px", position: "absolute", right: "84px", transform: "rotate(-24deg)", width: "34px" }} />
      <div style={{ background: "#272c30", bottom: "-140px", height: "690px", position: "absolute", right: "166px", transform: "rotate(-24deg)", width: "34px" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", zIndex: 1 }}>
        <div style={{ alignItems: "center", display: "flex", fontSize: 20, fontWeight: 700, gap: 22, letterSpacing: 2 }}>
          <img alt="" height="76" src={logo} style={{ borderRadius: "50%" }} width="76" />
          N.HAUSER / ENGENHARIA E ESTRUTURAS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 74, fontWeight: 800, letterSpacing: -4, lineHeight: 0.95, maxWidth: 820 }}>ENGENHARIA E ESTRUTURAS METÁLICAS.</div>
          <div style={{ color: "#d7d9d9", fontSize: 26, maxWidth: 650 }}>Projetos estruturais e soluções sob medida, do planejamento à execução.</div>
        </div>
        <div style={{ color: "#f5080c", fontSize: 18, fontWeight: 700, letterSpacing: 2 }}>LONTRAS — SANTA CATARINA</div>
      </div>
    </div>,
    size,
  );
}

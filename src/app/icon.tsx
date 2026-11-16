import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const logo = new URL("../../public/brand/n-hauser-logo.jpeg", import.meta.url).toString();

  return new ImageResponse(
    <div style={{ alignItems: "center", background: "#fafaf8", display: "flex", height: "100%", justifyContent: "center", width: "100%" }}>
      <img alt="N.Hauser" height="64" src={logo} style={{ objectFit: "contain" }} width="64" />
    </div>,
    size,
  );
}

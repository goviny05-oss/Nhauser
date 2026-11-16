import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function getBrandLogoDataUrl() {
  const logo = await readFile(join(process.cwd(), "public", "brand", "n-hauser-logo.jpeg"));
  return `data:image/jpeg;base64,${logo.toString("base64")}`;
}

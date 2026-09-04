import type { Metadata } from "next";
import Portfolio from "./portfolio";

export const metadata: Metadata = {
  title: "Sunita Rout | Product Designer",
  description:
    "Portfolio of Sunita Rout, a product designer shaping AI, SaaS, commerce, and complex enterprise experiences.",
};

export default function Home() {
  return <Portfolio />;
}

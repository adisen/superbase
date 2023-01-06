import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Rokkitt } from "@next/font/google";

const rokkitt = Rokkitt({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={rokkitt.className}>
      <Component {...pageProps} />
    </main>
  );
}

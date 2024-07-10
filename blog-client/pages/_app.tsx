import Navbar from "@/components/Navbar";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto font-sans ">
        <Navbar />
        <main className="pb-32">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

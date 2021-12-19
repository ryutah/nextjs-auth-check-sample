import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalProvider } from "../context/GlobalProvider";
import { SessionProvider } from "../context/SessionProvider";
import { ServiceProvider } from "../context/ServiceProvider";
import { CountProvider } from "../context/CountProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ServiceProvider>
      <GlobalProvider>
        <SessionProvider>
          <CountProvider>
            <Component {...pageProps} />;
          </CountProvider>
        </SessionProvider>
      </GlobalProvider>
    </ServiceProvider>
  );
}

export default MyApp;

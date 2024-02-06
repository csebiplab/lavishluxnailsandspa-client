import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import { Flowbite } from "flowbite-react";
import { flowbiteTheme } from "./theme";
import RoutingProgress from "@/components/__shared_one_time/__ui/RoutingProgress";
import { Montserrat } from "next/font/google";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Flowbite theme={{ theme: flowbiteTheme }}>
        <main className={montserrat.className}>
          {getLayout(<Component {...pageProps} />)}
        </main>
        <RoutingProgress />
      </Flowbite>
    </>
  );
}

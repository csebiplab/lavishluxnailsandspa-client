import RootLayout from "@/components/Layouts/RootLayout";
import HomeMainComponent from "@/components/__shared_one_time/Home/HomeMainComponent";
import Head from "next/head";
import { ReactElement } from "react";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home | Lavish Lux Nails And SPA</title>
      </Head>
      <section>
        <HomeMainComponent />
      </section>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

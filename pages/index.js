import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import Jumbotron from "../components/Jumbotron";
import LotterySuscriptionTable from "../components/LotterySubscriptionTable";
import BankcodeAdvert from "../components/BankcodeAdvert";
import GameTimer from "../components/GameTimer";
import InfoBanner from "../components/InfoBanner";
import TimetableAndInfo from "../components/TimetableAndInfo";
import Footer from "../components/Footer";
import BottomInfo from "../components/BottomInfo";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

export default function Home() {
  return (
    <ChakraProvider>
      <div className={styles.container}>
        <Head>
          <title>Express Forecast</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Layout>
          <Header />
          <Jumbotron />
          <LotterySuscriptionTable />
          <BankcodeAdvert />
          <GameTimer />
          <InfoBanner />
          <TimetableAndInfo />

          <footer className={styles.footer}>
            <Footer />
            <BottomInfo />
            <br />
          </footer>
        </Layout>
      </div>
    </ChakraProvider>
  );
}

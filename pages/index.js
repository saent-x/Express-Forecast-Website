import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { ChakraProvider } from "@chakra-ui/react";
import Jumbotron from '../components/Jumbotron';
import LotterySuscriptionTable from '../components/LotterySubscriptionTable';
import BankcodeAdvert from '../components/BankcodeAdvert';
import GameTimer from '../components/GameTimer';
import InfoBanner from '../components/InfoBanner';
import TimetableAndInfo from '../components/TimetableAndInfo';
import Footer from "../components/Footer";
import BottomInfo from '../components/BottomInfo';

export default function Home() {
  return (
    <ChakraProvider>
      <div className={styles.container}>
        <Head>
          <title>Express Forecast</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Layout>
          <main className={styles.main}>
            <Header />
            <Jumbotron />
            <LotterySuscriptionTable />
            <BankcodeAdvert />
            <GameTimer />
            <InfoBanner />
            <TimetableAndInfo />
          </main>

          <footer className={styles.footer}>
            <Footer />
            <BottomInfo />
            <br/>
          </footer>
        </Layout>
      </div>
    </ChakraProvider>
  );
}

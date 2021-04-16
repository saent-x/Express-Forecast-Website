import Head from "next/head";
import Layout from "../components/Layout";
import Jumbotron from "../components/Jumbotron";
import LotterySuscriptionTable from "../components/LotterySubscriptionTable";
import BankcodeAdvert from "../components/BankcodeAdvert";
import GameTimer from "../components/GameTimer";
import InfoBanner from "../components/InfoBanner";
import TimetableAndInfo from "../components/TimetableAndInfo";
import Loading from "../components/LoadingScreen";
import React, { useState } from "react";

export default function Home() {
  const [done, setDone] = useState(false);
  setTimeout(() => setDone(true), 5000);

  return (
    <>
      <Head>
        <title>Express Forecast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!done ? <Loading /> : null}
      <div style={{ display: done ? "block" : "none" }}>
        <Layout>
          <Jumbotron />
          <LotterySuscriptionTable />
          <BankcodeAdvert />
          <GameTimer />
          <InfoBanner />
          <TimetableAndInfo />
        </Layout>
      </div>
    </>
  );
}

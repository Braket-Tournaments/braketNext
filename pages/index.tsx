import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import Navbar from "../components/global/navbar";
import SupportedGames from "../components/home/supported-games";
import Features from "../components/home/features";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <SupportedGames />
      <SupportedGames />
      <div className={styles.square} />
      <Features />
    </>
  );
};

export default Home;

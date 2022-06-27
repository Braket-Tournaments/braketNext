import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import Navbar from "../components/global/navbar";
import SupportedGames from "../components/home/supported-games";
import ReadyToStart from "../components/home/ready-to-start"

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <SupportedGames />
      <SupportedGames />
      <div className={styles.square} />
      <ReadyToStart />
      <div className="h-[100rem]"/>
      
    </>
  );
};

export default Home;

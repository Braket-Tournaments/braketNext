import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import Navbar from "../components/global/navbar";
import SupportedGames from "../components/home/supported-games";
import ReadyToStart from "../components/home/ready-to-start"
import Footer from "../components/home/footer"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <SupportedGames />
      <SupportedGames />
      <div className={styles.square} />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default Home;

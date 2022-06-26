import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import SupportedGames from "../components/home/supported-games";

const Home: NextPage = () => {
  return (
    <div className={styles.homePageContainer}>
      <SupportedGames />
      <SupportedGames />
      <div className={styles.square} />
    </div>
  );
};

export default Home;

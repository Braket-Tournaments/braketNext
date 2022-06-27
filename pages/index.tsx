import type { NextPage } from "next";

import Navbar from "../components/global/navbar";
import SupportedGames from "../components/home/supported-games";
import ReadyToStart from "../components/home/ready-to-start"
import Footer from "../components/home/footer"
import Features from "../components/home/features";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <SupportedGames />
      <Features />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default Home;

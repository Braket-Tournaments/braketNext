import type { NextPage } from "next";

import Navbar from "../components/global/navbar";
import SupportedGames from "../components/home/supported-games";
import ReadyToStart from "../components/home/ready-to-start"
import Footer from "../components/home/footer"
import Features from "../components/home/features";
import PitchDeck from "../components/home/pitch-deck"

import { MyComponent } from "../components/home/framer";
const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <PitchDeck />
      <SupportedGames />
      <Features />
      <ReadyToStart />
      <Footer />
      <div className="h-10 bg-slate-700"></div>
      <MyComponent isVisible={true}/>
    </div>
  );
};

export default Home;

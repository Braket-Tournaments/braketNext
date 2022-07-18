import DecorLine from "../items/decor-line";

export default function SupportedGames() {
  function SupportedGameIcon({
    gameName,
    initalImg,
    hoverImg,
  }: {
    gameName: string;
    initalImg: string;
    hoverImg: string;
  }) {
    return (
      <div className="relative w-80%/3 z-1 h-[65%] shadow-2xl hover:cursor-pointer hover:shadow-none">
        <img
          className="absolute h-full w-full max-w-full max-h-full transition duration-500"
          src={hoverImg}
          alt={gameName}
        />
        <img
          className={
            "absolute h-full w-full max-w-full max-h-full transition duration-500 group-hover:grayscale-[80%] group-hover:blur-[0.07rem] hover:!scale-110 hover:!opacity-0 z-10"
          }
          src={initalImg}
          alt={gameName}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center gap-y-[25%]">
      <div className="w-[60rem] flex flex-col">
        <p className="mr-[4rem] text-[3.5rem] text-right">SUPPORTED GAMES</p>
        <div className="drop-shadow-arrow-svg flex">
          <DecorLine className="w-0 flex-grow-[1]" width={60} isLeft={false} />
        </div>
      </div>

      <div className="h-[50%] relative">
        <div className="flex flex-row h-full w-full mt-1 absolute group">
          <div className="w-5%"></div>
          <SupportedGameIcon
            gameName="Brandon"
            initalImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg"
            hoverImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_1.jpg"
          />
          <div className="w-5%"></div>
          <SupportedGameIcon
            gameName="Is"
            initalImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_2.jpg"
            hoverImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_3.jpg"
          />
          <div className="w-5%"></div>
          <SupportedGameIcon
            gameName="Elo-Deflated"
            initalImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_4.jpg"
            hoverImg="/images/brandon.png"
          />
          <div className="w-5%"></div>
        </div>
        {/* THIS IS TO MAKE SURE THAT WHEN YOU HOVER THE EDGES OF THE CONTAINER YOU DON'T ALSO GO INTO GRAYSCALE! */}
        <div className="h-full relative">
          <div className="w-5%"></div>
          <div className="relative w-80%/3 -z-10 h-40"></div>
          <div className="w-5%"></div>
          <div className="relative w-80%/3 -z-10 h-40"></div>
          <div className="w-5%"></div>
          <div className="relative w-80%/3 -z-10 h-40"></div>
          <div className="w-5%"></div>
        </div>
      </div>
    </div>
  );
}

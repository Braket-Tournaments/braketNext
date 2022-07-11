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
    <div className="flex flex-col h-[38rem] w-full]">
      <div className="text-4xl ml-24 mt-8 shadow-gray-700">SUPPORTED GAMES</div>
      <svg
        className="drop-shadow-arrowsvg"
        width="560"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          id="svg_3"
          height="0.33333"
          width="550"
          y="20"
          x="0"
          stroke="#904E55"
          fill="#904E55"
        />
        <ellipse
          ry="5"
          rx="5"
          id="svg_4"
          cy="20"
          cx="555"
          stroke="#904E55"
          fill="#904E55"
        />
      </svg>
      <div className="h-full relative">
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

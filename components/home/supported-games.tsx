import DecorLine from "../items/decor-line";

export default function SupportedGames() {
  function SupportedGameIcon({
    game,
    logo,
    children,
  }: {
    game: string;
    logo: string;
    children: string;
  }) {
    return (
      <div className="relative w-[30rem] h-[30rem] group">
        <div className="absolute w-full h-full group-hover:opacity-0 duration-[300ms]">
          <img src={logo} className="w-full h-full" alt={game + " Logo"} />
        </div>
        <div className="absolute w-full h-full opacity-0 border-black border-solid border-[0.1rem] flex flex-col align-center justify-center gap-y-[4rem] group-hover:opacity-100 duration-300">
          <h1 className="text-[3.5rem] text-center">{game}</h1>
          <p className="text-[1.5rem] px-[2.5rem]">{children}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[100vh] flex flex-col justify-evenly">
      <div className="w-[60rem] flex flex-col">
        <p className="mr-[4rem] text-[3.5rem] text-right">SUPPORTED GAMES</p>
        <div className="drop-shadow-arrow-svg flex">
          <DecorLine className="w-0 flex-grow-[1]" width={60} isLeft={false} />
        </div>
      </div>

      <div className="w-full h-[60%] flex justify-evenly items-center">
        <SupportedGameIcon game="Valorant" logo="/images/valorant.png">
          To be clear, in Valorant, shooting matters. You don’t kill with
          abilities. Abilities create tactical opportunities to take the right
          shot. Characters have abilities that augment their gunplay, instead of
          fighting directly with their abilities.
        </SupportedGameIcon>
        <SupportedGameIcon
          game="League of Legends"
          logo="/images/leagueoflegends.png"
        >
          I hope Zoe wins xD. I’m a Zoe main and she’s just so fun!! People get
          so trolled by the bubble, and her voice lines are so cute like when
          she sings about chocolate cake LOL! She’s super random but also
          smarter than she looks, just like me xD
        </SupportedGameIcon>
      </div>
    </div>
  );
}

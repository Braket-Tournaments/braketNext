import styles from "../../styles/Home.module.css";

function SupportedGames() {
  return (
    <div className={styles.supportGamesBackground}>
      <div className={styles.supportedGamesTitle}>SUPPORTED GAMES</div>
      <svg
        className={styles.arrowSVG}
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
      <div className={styles.preventOverlapGamesIcons}>
        <div className={styles.supportedGamesIcons}>
          <div className={styles.noSpaceGameIconsSide}></div>
          <SupportedGameIcon
            gameName="Brandon"
            initalImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg"
            hoverImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_1.jpg"
          />
          <div className={styles.noSpaceGameIconsMiddle}></div>
          <SupportedGameIcon
            gameName="Is"
            initalImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_2.jpg"
            hoverImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_3.jpg"
          />
          <div className={styles.noSpaceGameIconsMiddle}></div>
          <SupportedGameIcon
            gameName="Elo-Deflated"
            initalImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_4.jpg"
            hoverImg="/home/brandon.PNG"
          />
          <div className={styles.noSpaceGameIconsSide}></div>
      <div className="flex flex-col h-screen">
        <div className={styles.supportedGamesTitle}>
          SUPPORTED GAMES
        </div>
        {/* THIS IS TO MAKE SURE THAT WHEN YOU HOVER THE EDGES OF THE CONTAINER YOU DON'T ALSO GO INTO GRAYSCALE! */}
        <div className={styles.supportedGamesIcons}>
          <div className={styles.noSpaceGameIconsSide}></div>
          <div className={styles.invisibleGameIcons}></div>
          <div className={styles.noSpaceGameIconsMiddle}></div>
          <div className={styles.invisibleGameIcons}></div>
          <div className={styles.noSpaceGameIconsMiddle}></div>
          <div className={styles.invisibleGameIcons}></div>
          <div className={styles.noSpaceGameIconsSide}></div>
        </div>
      </div>
    </div>
  );
}

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
    <div className={styles.supportedGameIcon}>
      <img
        className={
          styles.gameIconImage + " " + styles.higherOpacityGameIconImage
        }
        src={hoverImg}
        alt={gameName}
      />
      <img
        className={
          styles.gameIconImage + " " + styles.lowerOpacityGameIconImage
        }
        src={initalImg}
        alt={gameName}
      />
    </div>
  );
}

export default SupportedGames;

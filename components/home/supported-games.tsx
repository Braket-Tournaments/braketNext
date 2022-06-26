import styles from '../../styles/Home.module.css'

function SupportedGames() {
  return (
      <div className={styles.supportGamesBackground}>
        <div className={styles.supportedGamesTitle}>
          SUPPORTED GAMES
        </div>
        <div className={styles.supportedGamesIcons}>
        <div className={styles.noSpaceGameIconsSide}></div>
          <SupportedGameIcon gameName="Brandon" initalImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg" hoverImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_1.jpg"/>
          <div className={styles.noSpaceGameIconsMiddle}></div>
          <SupportedGameIcon gameName="Is" initalImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_2.jpg" hoverImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_3.jpg"/>
          <div className={styles.noSpaceGameIconsMiddle}></div>
          <SupportedGameIcon gameName="Elo-Deflated" initalImg="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_4.jpg" hoverImg="/home/brandon.PNG"/>
          <div className={styles.noSpaceGameIconsSide}></div>
        </div>
      </div>
    )
}

function SupportedGameIcon({gameName, initalImg, hoverImg}: {gameName: string, initalImg: string, hoverImg: string}) {
  return (
    <div className={styles.supportedGameIcon}>
      <img className={styles.gameIconImage + " " + styles.higherOpacityGameIconImage} src={hoverImg} alt={gameName} />
      <img className={styles.gameIconImage + " " + styles.lowerOpacityGameIconImage} src={initalImg} alt={gameName} />
    </div>
  )
}

  
export default SupportedGames
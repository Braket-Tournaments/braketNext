import styles from "../../styles/Home.module.css";

export default function SupportedGames() {
  function SupportedGameIcon({ gameName }: { gameName: string }) {
    return <div className={styles.supportedGameIcon}>{gameName}</div>;
  }

  return (
    <div className={styles.supportGamesBackground}>
      <div className={styles.supportedGamesTitle}>SUPPORTED GAMES</div>
      <div className={styles.supportedGamesIcons}>
        <SupportedGameIcon gameName="Brandon One" />
        <SupportedGameIcon gameName="Brandon Two" />
        <SupportedGameIcon gameName="Brandon Three" />
      </div>
    </div>
  );
}

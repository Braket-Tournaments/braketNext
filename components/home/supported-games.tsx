import styles from '../../styles/Home.module.css'

function SupportedGames() {
  return (
      <div className={styles.supportGamesBackground}>
        <SupportedGameIcon gameName="Brandon One"/>
        <SupportedGameIcon gameName="Brandon Two"/>
        <SupportedGameIcon gameName="Brandon Three"/>
      </div>
    )
}

function SupportedGameIcon({gameName}: {gameName: string}) {
  return (
    <div>{gameName}</div>
  )
}

  
export default SupportedGames
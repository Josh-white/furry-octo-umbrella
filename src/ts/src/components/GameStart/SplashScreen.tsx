import React, {useState} from "react";
import "./SplashScreen.css"
import battleshipLogo from "../../assets/battleshipLogo.png"
import {GameBoard} from "../board/GameBoard";

export const SplashScreen = () => {
  const [playingGame, setPlayingGame] = useState(false)
  function singlePlayerGame() {
    setPlayingGame(true)
  }

  return (
    playingGame ? <GameBoard/> :
    <div className="splashscreen">
      <img src={battleshipLogo} alt="battleship logo" className="logo"/>
      <div className="button_container">
        <button aria-label="One Player" onClick={singlePlayerGame}>One Player</button>
        {/*<button aria-label="Two Player">Two Player</button>*/}
      </div>
    </div>
  )
}
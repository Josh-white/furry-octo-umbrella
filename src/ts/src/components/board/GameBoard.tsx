import React from "react";
import "./GameBoard.css"
import {Port} from "./Port"
import {EnemyBoard} from "./EnemyBoard";
import {PlayerBoard} from "./PlayerBoard";
import {GameStateProvider} from "../../providers/gameStateContext";

export const GameBoard = () => {

  return (
    <GameStateProvider>
      <div className="game--container">
        <PlayerBoard/>
        <EnemyBoard/>
      </div>
      <Port/>
    </GameStateProvider>
  )
}
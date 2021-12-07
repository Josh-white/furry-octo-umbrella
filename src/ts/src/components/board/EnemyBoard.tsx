import React from "react";
import {CreateGrid} from "./CreateGrid";
import {useGameState} from "../../providers/gameStateContext";

export const EnemyBoard = () => {

  const {enemyBoard} = useGameState()

  const xAxis = () => {
    let x = []
    for (let i = 1; i < 11; i++) {
      x.push(<h3>{i}</h3>)
    }
    return x;
  }

  const yAxis = () => {
    let y = []
    for (let i = 65; i < 75; i++) {
      y.push(<h3>{String.fromCharCode(i)}</h3>)
    }
    return y
  }

  return (
    <div className="enemyBoard">
      <h1>Enemy Board</h1>
      <div className="playerBoard--axis-container">
        <div className="playerBoard--axis-x">{xAxis()}</div>
        <div className="enemyBoard--container">
          {enemyBoard.map(gridSquare =>
                  <CreateGrid
                      className={`enemyBoard--grid`}
                      isOpen={gridSquare.isOpen}
                      x={gridSquare.x}
                      y={gridSquare.y}
                      key={`enemyBoard-${gridSquare.x}-${gridSquare.y}`}
                  />)
          }
          <div className="playerBoard--axis-y">{yAxis()}</div>
        </div>
      </div>
    </div>
    )
}
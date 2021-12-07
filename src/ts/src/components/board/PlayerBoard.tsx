import React from "react";
import {CreateGrid} from "./CreateGrid";
import {useGameState} from "../../providers/gameStateContext";

export interface PlayerBoardProps {
}

export const PlayerBoard = () => {
    const {playerBoard} = useGameState()

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
        <div className="playerBoard">
            <h1>Player Board</h1>
            <div className="playerBoard--axis-container">
                <div className="playerBoard--axis-x">{xAxis()}</div>
                <div className="playerBoard--container">
                    {playerBoard.map(gridSquare =>
                            <CreateGrid
                                className={`playerBoard--grid`}
                                isOpen={gridSquare.isOpen}
                                x={gridSquare.x}
                                y={gridSquare.y}
                                shipName={gridSquare.shipName}
                                key={`playerBoard-${gridSquare.x}-${gridSquare.y}`}
                            />)
                    }
                    <div className="playerBoard--axis-y">{yAxis()}</div>
                </div>
            </div>
        </div>
    )
}

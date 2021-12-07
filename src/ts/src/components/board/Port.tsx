import React, {useState} from "react";
import "./Port.css"
import {ShipCreator} from "../Ship/ShipCreator";
import {useGameState} from "../../providers/gameStateContext";
import axios from "axios";

export interface PortProps {
}

export const Port = () => {
  const {port, resetPort, resetPlayerBoard, playerBoard} = useGameState()
  const [isVertical, setIsVertical] = useState(true)

  const rotateShips = () => {
    //TODO change this because I know its not right
    setIsVertical(!isVertical)
  }

  const handleResetShipsClick = () => {
    resetPort()
    resetPlayerBoard()
  }

  const handleStartGameClick = async () => {
    try {
      const response = await axios.post('/startNewGame', playerBoard)
      alert("Oh shit the backend took the request.")
      console.log(response);
    } catch (error) {
      alert('my creator has not build the backend to handle the request')
      console.error(error);
    }
  }

  return (
    <div className='port--container'>
      <div>
        <h2>
          Safe Harbor
        </h2>
        <button onClick={rotateShips}>
          Rotate
        </button>
        <button onClick={() => handleResetShipsClick()}>
          Reset Ships
        </button>
        <button disabled={port.length > 0} onClick={() => handleStartGameClick()}>
          Start Game
        </button>
      </div>
      <div className="port">
        {port.map(ship =>
          <ShipCreator
            key={`${ship.shipName}-${ship.size}`}
            className={ship.shipName}
            size={ship.size}
            isVertical={isVertical}/>)}
      </div>
    </div>
  );
}
import {Ship} from "../../hooks/usePort";
import {GridSquare} from "../../hooks/useBoard";
//TODO rename to just a ts file
export interface InfoNeededToPlaceShipOnPlayerBoard {
  xPosition: number,
  yPosition: number,
  shipName: string,
  pieceNumber: number,
  isVertical: boolean,
  size: number
}

export const generateFullSizeOfShip = (pieceOfShip: InfoNeededToPlaceShipOnPlayerBoard) => {
  const tempFullShipArray: GridSquare[] = []

  if(pieceOfShip.isVertical){
    let upperXPosition = pieceOfShip.xPosition-1

    for (let i = 1; i < pieceOfShip.pieceNumber; i++) {
      const shipPiece: GridSquare = {x: upperXPosition, y: pieceOfShip.yPosition, isOpen: false, shipName: pieceOfShip.shipName}
      tempFullShipArray.push(shipPiece)
      upperXPosition--
    }

    tempFullShipArray.push({x: pieceOfShip.xPosition, y: pieceOfShip.yPosition, isOpen: false, shipName:pieceOfShip.shipName})

    let lowerXPositions = pieceOfShip.xPosition + 1
    for (let i = pieceOfShip.size; i > pieceOfShip.pieceNumber; i--) {
      const shipPiece: GridSquare = {x: lowerXPositions, y: pieceOfShip.yPosition, isOpen: false, shipName: pieceOfShip.shipName}
      tempFullShipArray.push(shipPiece)
      lowerXPositions++
    }
  }

  if(!pieceOfShip.isVertical) {
    let leftYPosition = pieceOfShip.yPosition-1

    for (let i = 1; i < pieceOfShip.pieceNumber; i++) {
      const shipPiece: GridSquare = {x: pieceOfShip.xPosition, y: leftYPosition, isOpen: false, shipName: pieceOfShip.shipName}
      tempFullShipArray.push(shipPiece)
      leftYPosition--
    }

    tempFullShipArray.push({x: pieceOfShip.xPosition, y: pieceOfShip.yPosition, isOpen: false, shipName: pieceOfShip.shipName})

    let rightYPositions = pieceOfShip.yPosition + 1
    for (let i = pieceOfShip.size; i > pieceOfShip.pieceNumber; i--) {
      const shipPiece: GridSquare = {x: pieceOfShip.xPosition, y: rightYPositions, isOpen: false, shipName: pieceOfShip.shipName}
      tempFullShipArray.push(shipPiece)
      rightYPositions++
    }
  }
  return tempFullShipArray
}

export const initialShipsInPort: Ship[] = [
  {
    shipName: "carrier",
    size: 5
  },
  {
    shipName: "battleship",
    size: 4
  },
  {
    shipName: "cruiser",
    size: 3
  },
  {
    shipName: "submarine",
    size: 3
  },
  {
    shipName: "destroyer",
    size: 2
  }]

import React from "react";
import {generateFullSizeOfShip} from "../Ship/shipHelpers";
import {useGameState} from "../../providers/gameStateContext";

export interface CreateGridProps {
  className: string,
  x: number,
  y: number,
  isOpen: boolean,
  shipName?: string
}

interface ShipData {
  shipName: string,
  shipPieceNumber: number,
  isVertical: boolean,
  size: number
}

export const CreateGrid = (
  {
    className,
    x,
    y,
    isOpen,
    shipName,
  }: CreateGridProps) => {
  const {removeShip, playerPlacedShip, isValidShipPlacement} = useGameState()

  let gridClass = "grid";

  if (className) {
    gridClass = `${gridClass} ${className}`;
  }

  if (isOpen) {
    gridClass = `${gridClass} grid--open`;
  }

  if (!isOpen && shipName) {
    gridClass = `${gridClass} ${shipName}`
  }

  function preventDefaultDrag(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
  }

  function handleShipDragEnter(event: React.DragEvent<HTMLDivElement>) {

    //TODO prob do some checking on if this grid isOpen and change the colors of the tiles as the user moves through them
  }

  function handleShipDragLeave(event: React.DragEvent<HTMLDivElement>) {
    //TODO prob change some color of the tiles back to let the user know where the ship will be placed.
  }

  function handleShipDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()

    const dataFromShip: ShipData = JSON.parse(event.dataTransfer.getData("ShipData"))
    const allShipPieces = generateFullSizeOfShip(
      {
        xPosition: x,
        yPosition: y,
        pieceNumber: dataFromShip.shipPieceNumber,
        size: dataFromShip.size,
        shipName: dataFromShip.shipName,
        isVertical: dataFromShip.isVertical
      })
    if(isValidShipPlacement(allShipPieces)) {
      removeShip(dataFromShip.shipName)
      playerPlacedShip(allShipPieces)
    }

  }

  return (className === `playerBoard--grid` ?
      <div
        className={gridClass}
        data-x={x}
        data-y={y}
        aria-label={`${className} ${x},${y}`}
        onDrop={(event) => handleShipDrop(event)}
        onDragOver={(event) => preventDefaultDrag(event)}
        onDragEnter={(event) => handleShipDragEnter(event)}
        onDragLeave={(event) => handleShipDragLeave(event)}
      >
      </div> :
      <div
        className={gridClass}
        data-x={x}
        data-y={y}
        aria-label={`${className} ${x},${y}`}
      >
      </div>

  )
}
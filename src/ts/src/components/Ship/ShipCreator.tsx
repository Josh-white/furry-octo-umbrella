import React, {useState} from "react";

export interface ShipCreatorProps {
  className: string,
  size: number,
  isVertical: boolean
}

export const ShipCreator = ({className, size, isVertical}: ShipCreatorProps) => {

  const shipPieces = []
  const [pieceForOnHover, setPieceForOnHover] = useState<number>()

  function handleOnMouseEnter(piece: number) {
    setPieceForOnHover(piece)
  }

  function handleOnMouseLeave() {
    setPieceForOnHover(0)
  }

  for (let piece = 1; piece <= size; piece++) {
    shipPieces.push(
      <div className={`${pieceForOnHover === piece ? 'hovered' : ''} ship--${className} `}
           key={`${className}-${piece}`}
           aria-label={`${className}-${piece}`}
           onMouseEnter={() => handleOnMouseEnter(piece)}
           onMouseLeave={() => handleOnMouseLeave()}/>)
  }

  //TODO collapse these into one function
  function handleShipDrag(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
  }

  function handleShipDragEnd(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault()
  }

  function getOnDragStart(event: React.DragEvent<HTMLDivElement>) {
    const dataFromShip = JSON.stringify(
      {
        shipName: event.currentTarget.id,
        shipPieceNumber: pieceForOnHover,
        isVertical: isVertical,
        size: size
      })
    return event.dataTransfer.setData("ShipData", dataFromShip);

  }

  return (
    <div data-testid={`${className}--container`}
         id={`${className}`}
         data-shipsize={size}
         className={isVertical ? `ship--container--vertical` : `ship--container--horizontal`}
         draggable={true}
         onDragStart={(event) => getOnDragStart(event)}
         onDrag={(event) => handleShipDrag(event)}
         onDragEnd={(event) => handleShipDragEnd(event)}
    >
      {shipPieces}
    </div>
  )
}
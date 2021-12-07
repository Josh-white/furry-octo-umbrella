import {useState} from "react";

export interface GridSquare {
    x: number,
    y: number,
    isOpen: boolean,
    shipName?: string
}

export const useBoard = () => {
    const [playerBoard, setPlayerBoard] = useState<GridSquare[]>(generateEmptyBoard())
    const [enemyBoard, setEnemyBoard] = useState<GridSquare[]>(generateEmptyBoard())

    const isValidShipPlacement = (ship: GridSquare[]) => {
        let isValid = false
        let count = 0
        playerBoard.forEach(gridSquare => {
            const matched = ship.find(shipPiece => gridSquare.x === shipPiece.x && gridSquare.y === shipPiece.y && gridSquare.isOpen)
            if (matched) {
                count++
            }
        })
        if(count === ship.length) isValid=true

        return isValid
    }

    const playerPlacedShip = (ship: GridSquare[]) => {
        setPlayerBoard(prevState => prevState.map(gridSquare => {
            const matched = ship.find(shipPiece => gridSquare.x === shipPiece.x && gridSquare.y === shipPiece.y && gridSquare.isOpen)
            if (matched) {
                return  {...gridSquare, isOpen: matched.isOpen, shipName: matched.shipName}
            }
            return {...gridSquare}
        }))
    }

    const enemyPlacedShip = (pieceOfShip: GridSquare) => {
        setEnemyBoard(prevState => prevState.map(gridSquare =>
            gridSquare.x === pieceOfShip.x && gridSquare.y === pieceOfShip.y ?
                {...gridSquare ,isOpen:false, shipName:pieceOfShip.shipName} : {...gridSquare}))

    }

    const resetPlayerBoard = () => {
        setPlayerBoard(generateEmptyBoard())
    }

    return {playerBoard, enemyBoard, playerPlacedShip, enemyPlacedShip, resetPlayerBoard, isValidShipPlacement}
}

const generateEmptyBoard = () => {
    let tempPlayerBoard: GridSquare[] = []

    for (let row = 0; row < 10; row++) {
        for (let column = 0; column < 10; column++) {
            const newGridSquare: GridSquare = {
                x: row,
                y: column,
                isOpen: true,
            }
            tempPlayerBoard.push(newGridSquare)
        }
    }
    return tempPlayerBoard
}
import {useState} from "react";
import {initialShipsInPort} from "../components/Ship/shipHelpers";

export interface Ship {
    shipName: string,
    size: number
}

export const usePort = () => {
    const [port, setPort] = useState<Ship[]>(initialShipsInPort)

    const removeShip = (shipName: string) => {
        const newPort = port.filter(ship => ship.shipName !== shipName)
        setPort(newPort)
    }

    const resetPort = () => {
        setPort(initialShipsInPort)
    }

    return {port, removeShip, resetPort}
}
import React, {createContext} from "react";
import {useBoard} from "../hooks/useBoard";
import {usePort} from "../hooks/usePort";

interface gameStateContextProps {
  board: ReturnType<typeof useBoard>,
  port: ReturnType<typeof usePort>
}
//TODO change this and spell out all the types so that it throws errors that will help a dev if they try to use context without a provider.

// const GameStateContext = createContext<gameStateContextProps>({board: {playerPlaceShip: () => throw new Error('you probably want a provider')}} as any)
const GameStateContext = createContext<gameStateContextProps>({} as any)

const GameStateProvider: React.FC = ({children}) => {
  const board = useBoard()
  const port = usePort()

  return (
    <GameStateContext.Provider
      value={{board, port}}>
      {children}
    </GameStateContext.Provider>
  )
}

export const useGameState = () => {
  const context = React.useContext(GameStateContext)
  return {...context.board, ...context.port}
}

export {GameStateProvider}
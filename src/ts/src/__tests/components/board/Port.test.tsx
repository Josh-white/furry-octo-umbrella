import React from "react";
import {Port} from "../../../components/board/Port";
import {fireEvent, render, screen} from "@testing-library/react";
import {GameStateProvider} from "../../../providers/gameStateContext";

describe("Port", () => {

  it('should let users know that it is a safe place for ships', () => {
    renderPortWithProviders()

    expect(screen.getByRole('heading', {name: 'Safe Harbor'})).toBeVisible()
  });

  // it.each(ships)("should display %s in the safe harbor", (ship) => {
  //   renderPortWithProviders()
  //
  //   expect(screen.getAllByText(ship.name)).toHaveLength(ship.shipSize)
  // })

  it('should have a button to rotate ships', () => {
    renderPortWithProviders()

    expect(screen.getByRole('button', {name: "Rotate"})).toBeVisible()
  });

  it('should change the direction of the ships', () => {
    renderPortWithProviders()

    fireEvent.click(screen.getByRole('button', {name: "Rotate"}))


    expect((screen.getByTestId('carrier--container')).classList.contains('ship--container--horizontal')).toBe(true)
  });

  it('should have a start game button that is disabled', () => {
    renderPortWithProviders()

    expect(screen.getByRole('button', {name: "Start Game"})).toBeDisabled()
  });

  // it('the start game button should become enabled when the port is empty', () => {
  //   renderPortWithoutShips()
  //
  //   expect(screen.getByRole('button', {name: "Start Game"})).toBeEnabled()
  // });
})

interface TestProviderProps {
  port: [],
  resetPort: () => void,
  resetPlayerBoard: () => void,
}

const renderPortWithProviders = () => {
  render(
    <GameStateProvider>
      <Port/>
    </GameStateProvider>
  )
}

// const renderPortWithoutShips = () => {
//   const TestGameStateContext = createContext<TestProviderProps>({} as any)
//   const port: [] = []
//   const resetPort = jest.fn()
//   const resetPlayerBoard = jest.fn()
//   render(
//     <TestGameStateContext.Provider
//       value={{port, resetPort, resetPlayerBoard}}>
//       <Port/>
//     </TestGameStateContext.Provider>
//   )
// }
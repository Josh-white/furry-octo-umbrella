import React from "react";
import {GridSquare, useBoard} from "../../hooks/useBoard";
import {act, renderHook} from "@testing-library/react-hooks";

describe('usePlayerBoard', () => {
  it('should return a player board', () => {
    const {result} = renderHook(() => useBoard())

    expect(result.current.playerBoard).toHaveLength(100)
    expect(result.current.playerBoard[0]).toEqual({x: 0, y: 0, isOpen: true})
    expect(result.current.playerBoard[9]).toEqual({x: 0, y: 9, isOpen: true})
    expect(result.current.playerBoard[90]).toEqual({x: 9, y: 0, isOpen: true})
    expect(result.current.playerBoard[99]).toEqual({x: 9, y: 9, isOpen: true})
  });
  it('should return a enemy board', () => {
    const {result} = renderHook(() => useBoard())

    expect(result.current.enemyBoard).toHaveLength(100)
    expect(result.current.enemyBoard[0]).toEqual({x: 0, y: 0, isOpen: true})
    expect(result.current.enemyBoard[9]).toEqual({x: 0, y: 9, isOpen: true})
    expect(result.current.enemyBoard[90]).toEqual({x: 9, y: 0, isOpen: true})
    expect(result.current.enemyBoard[99]).toEqual({x: 9, y: 9, isOpen: true})
  });

  it('playerPlacedShip should place ship on playerBoard', () => {
    const {result} = renderHook(() => useBoard())

    const placedShip: GridSquare[] = [
      {x: 0, y: 0, isOpen: false, shipName: "carrier"},
      {x: 1, y: 0, isOpen: false, shipName: "carrier"},
      {x: 2, y: 0, isOpen: false, shipName: "carrier"},
      {x: 3, y: 0, isOpen: false, shipName: "carrier"},
      {x: 4, y: 0, isOpen: false, shipName: "carrier"},
    ]

    act(() => {
      result.current.playerPlacedShip(placedShip)
    })

    expect(result.current.playerBoard[0]).toEqual(
      {x: 0, y: 0, isOpen: false, shipName: "carrier"})
    expect(result.current.playerBoard[10]).toEqual(
      {x: 1, y: 0, isOpen: false, shipName: "carrier"})
    expect(result.current.playerBoard[20]).toEqual(
      {x: 2, y: 0, isOpen: false, shipName: "carrier"})
    expect(result.current.playerBoard[30]).toEqual(
      {x: 3, y: 0, isOpen: false, shipName: "carrier"})
    expect(result.current.playerBoard[40]).toEqual(
      {x: 4, y: 0, isOpen: false, shipName: "carrier"})
  });

  it('enemyPlacedShip should place ship on enemyBoard', () => {
    const {result} = renderHook(() => useBoard())

    const placedShip: GridSquare = {
      x: 0, y: 0, isOpen: false, shipName: "carrier"
    }
    act(() => {
      result.current.enemyPlacedShip(placedShip)
    })

    expect(result.current.enemyBoard[0]).toEqual(
      {x: 0, y: 0, isOpen: false, shipName: "carrier"})
  });

  it('resetPlayerBoard should reset the board to its original state', () => {
    const {result} = renderHook(() => useBoard())

    const placedShip: GridSquare[] = [
      {x: 0, y: 0, isOpen: false, shipName: "carrier"},
      {x: 1, y: 0, isOpen: false, shipName: "carrier"},
      {x: 2, y: 0, isOpen: false, shipName: "carrier"},
      {x: 3, y: 0, isOpen: false, shipName: "carrier"},
      {x: 4, y: 0, isOpen: false, shipName: "carrier"},
    ]

    act(() => {
      result.current.playerPlacedShip(placedShip)
    })

    act(() => {
      result.current.resetPlayerBoard()
    })

    expect(result.current.playerBoard[0]).toEqual(
      {x: 0, y: 0, isOpen: true})
    expect(result.current.playerBoard[10]).toEqual(
      {x: 1, y: 0, isOpen: true})
    expect(result.current.playerBoard[20]).toEqual(
      {x: 2, y: 0, isOpen: true})
    expect(result.current.playerBoard[30]).toEqual(
      {x: 3, y: 0, isOpen: true})
    expect(result.current.playerBoard[40]).toEqual(
      {x: 4, y: 0, isOpen: true})
  });

  it('isValidShipPlacement should return false if invalid placement', () => {
    const {result} = renderHook(() => useBoard())

    const placedCarrier: GridSquare[] = [
      {x: 0, y: 0, isOpen: false, shipName: "carrier"},
      {x: 1, y: 0, isOpen: false, shipName: "carrier"},
      {x: 2, y: 0, isOpen: false, shipName: "carrier"},
      {x: 3, y: 0, isOpen: false, shipName: "carrier"},
      {x: 4, y: 0, isOpen: false, shipName: "carrier"},
    ]

    const placedSubmarine: GridSquare[] = [
      {x: 0, y: 0, isOpen: false, shipName: "submarine"},
      {x: 1, y: 0, isOpen: false, shipName: "submarine"},
      {x: 2, y: 0, isOpen: false, shipName: "submarine"},
    ]

    act(() => {
      result.current.playerPlacedShip(placedCarrier)
    })

    expect(result.current.isValidShipPlacement(placedSubmarine)).toEqual(false)
  });

  it('isValidShipPlacement should return true if valid placement', () => {
    const {result} = renderHook(() => useBoard())

    const placedCarrier: GridSquare[] = [
      {x: 0, y: 0, isOpen: false, shipName: "carrier"},
      {x: 1, y: 0, isOpen: false, shipName: "carrier"},
      {x: 2, y: 0, isOpen: false, shipName: "carrier"},
      {x: 3, y: 0, isOpen: false, shipName: "carrier"},
      {x: 4, y: 0, isOpen: false, shipName: "carrier"},
    ]

    const placedSubmarine: GridSquare[] = [
      {x: 0, y: 1, isOpen: false, shipName: "submarine"},
      {x: 1, y: 1, isOpen: false, shipName: "submarine"},
      {x: 2, y: 1, isOpen: false, shipName: "submarine"},
    ]

    act(() => {
      result.current.playerPlacedShip(placedCarrier)
    })

    expect(result.current.isValidShipPlacement(placedSubmarine)).toEqual(true)
  });
})
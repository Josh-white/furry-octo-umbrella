import React from "react";
import {fireEvent,render, screen} from "@testing-library/react";
import {GameBoard} from "../../../components/board/GameBoard";

describe("SinglePlayerBoard", () =>{

  it('should have a 10x10 player area',  () => {
    render(<GameBoard/>)

    expect(screen.getByRole('heading', {name: 'Player Board'})).toBeVisible()
    expect(screen.getByLabelText('playerBoard--grid 1,1')).toBeVisible()
    expect(screen.getByLabelText('playerBoard--grid 1,10')).toBeVisible()
    expect(screen.getByLabelText('playerBoard--grid 10,1')).toBeVisible()
    expect(screen.getByLabelText('playerBoard--grid 10,10')).toBeVisible()
  });

  it('should have a 10x10 enemy area',  () => {
    render(<GameBoard/>)

    expect(screen.getByRole('heading', {name: 'Enemy Board'})).toBeVisible()
    expect(screen.getByLabelText('enemyBoard--grid 1,1')).toBeVisible()
    expect(screen.getByLabelText('enemyBoard--grid 1,10')).toBeVisible()
    expect(screen.getByLabelText('enemyBoard--grid 10,1')).toBeVisible()
    expect(screen.getByLabelText('enemyBoard--grid 10,10')).toBeVisible()
  });

  it('should display coordinates on the x and y axis',  () => {
    render(<GameBoard/>)

    expect(screen.getAllByText("1")).toHaveLength(2)
    expect(screen.getAllByText("10")).toHaveLength(2)
    expect(screen.getAllByText("A")).toHaveLength(2)
    expect(screen.getAllByText("J")).toHaveLength(2)

  });

})
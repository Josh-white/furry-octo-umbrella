import React from "react";
import {fireEvent,render, screen} from "@testing-library/react";
import {SplashScreen} from "../../../components/GameStart/SplashScreen";



describe('Battleship', () => {
  it('should contain a background image', () => {
    render(<SplashScreen/>)
    expect(screen.getByRole('img', {name: 'battleship logo'})).toBeVisible()
  })

  it('should contain a button to select single player',  () => {
    render(<SplashScreen/>)

    expect(screen.getByRole('button', {name: /One Player/i})).toBeVisible()
  });

  it('should render a different page when one player button is clicked',  () => {
    render(<SplashScreen/>)

    fireEvent.click(screen.getByRole('button', {name: /one player/i}))

    expect(screen.queryByRole('button', {name:/one player/i})).not.toBeInTheDocument()
    expect(screen.getByText('Player board')).toBeVisible()
  });

})
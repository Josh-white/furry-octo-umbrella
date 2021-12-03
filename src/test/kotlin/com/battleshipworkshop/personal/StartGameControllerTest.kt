package com.battleshipworkshop.personal

import org.junit.jupiter.api.Test

internal class StartGameControllerTest {

    @Test
    fun `StartGame takes in the playBoard`() {
        val gridSquare1 = GridSquare(x = 0, y = 0, isOpen = true, shipName = null)
        val gridSquare2 = GridSquare(x = 0, y = 1, isOpen = true, shipName = null)
        val playerBoard = Board(board = listOf(gridSquare1, gridSquare2))

        val controller = StartGameController()

        controller.startGame(playerBoard)
    }
}

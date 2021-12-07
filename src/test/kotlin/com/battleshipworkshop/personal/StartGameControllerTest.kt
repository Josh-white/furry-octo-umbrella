package com.battleshipworkshop.personal

import org.junit.jupiter.api.Test
import io.mockk.*

internal class StartGameControllerTest {
    private lateinit var mockStartGameService: StartGameService

    @Test
    fun `StartGame takes in the playBoard`() {
        mockStartGameService = mockk()
        val gridSquare1 = GridSquare(x = 0, y = 0, isOpen = true, shipName = null)
        val gridSquare2 = GridSquare(x = 0, y = 1, isOpen = true, shipName = null)
        val playerBoard = Board(board = listOf(gridSquare1, gridSquare2))

        every { mockStartGameService.startGame(playerBoard)} returns playerBoard
        val controller = StartGameController(mockStartGameService)

        controller.startGame(playerBoard)

        verify( exactly = 1) { mockStartGameService.startGame(playerBoard)}
    }
}

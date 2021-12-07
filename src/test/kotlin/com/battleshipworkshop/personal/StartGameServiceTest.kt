package com.battleshipworkshop.personal

import io.mockk.MockK
import io.mockk.mockk
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

internal class StartGameServiceTest {
    private lateinit var redisRepository: RedisRepository
    @Test
    fun `startGame saves playerBoard` () {
        val redisRepository = mockk<RedisRepository>()
        val startGameService = StartGameService(redisRepository)
        val gridSquare1 = GridSquare(x = 0, y = 0, isOpen = true, shipName = null)
        val gridSquare2 = GridSquare(x = 0, y = 1, isOpen = true, shipName = null)
        val playerBoard = Board(board = listOf(gridSquare1, gridSquare2))
        val results = startGameService.startGame(playerBoard)

        assertEquals(results, playerBoard)
    }
}
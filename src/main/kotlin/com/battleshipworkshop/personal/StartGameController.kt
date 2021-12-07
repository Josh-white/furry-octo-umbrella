package com.battleshipworkshop.personal

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class StartGameController(private val startGameService: StartGameService) {

    @PostMapping("/startNewGame")
    fun startGame(@RequestBody playerBoard: Board) {
        startGameService.startGame(playerBoard)
    }
}
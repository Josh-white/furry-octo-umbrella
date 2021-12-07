package com.battleshipworkshop.personal

import org.springframework.stereotype.Service

@Service
class StartGameService {
    fun startGame(playerBoard: Board): Board {
        return playerBoard
    }

}

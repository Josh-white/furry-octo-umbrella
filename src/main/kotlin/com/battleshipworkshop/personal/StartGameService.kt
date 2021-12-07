package com.battleshipworkshop.personal
import org.springframework.stereotype.Service

@Service
class StartGameService (val redisRepository: RedisRepository) {

    fun startGame(playerBoard: Board): Board {
        return redisRepository.savePlayerBoard(playerBoard)
    }

}

package com.battleshipworkshop.personal

data class GridSquare(
    val x:Int,
    val y:Int,
    val isOpen: Boolean,
    val shipName: String?,
) {

}

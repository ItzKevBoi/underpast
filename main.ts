namespace SpriteKind {
    export const button = SpriteKind.create()
    export const soul = SpriteKind.create()
}
function Level () {
    if (level == 0) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff111111111111ffff111111ffffffffffffbbb1111111111111ffffffffffffffffbbbd111111111111ffffffffff111111111111111bbbfffffffffff
            ffbbb111111111ffffff111111111111fffffff111111111111ffff111111ffffffffffffbbb1111111111111ffffffffffffffffbbbd111111111111ffffffffff111111111111111bbbfffffffffff
            ffbbb111111111ffffff111111111111fffffff111111111111ffff111111ffffffffffffbbb1111111111111ffffffffffffffffbbbd111111111111ffffffffff111111111111111bbbfffffffffff
            ffbbb111111111ffffff111111111111fffffff111111111111bbbf111111ffffffffffff1111111111111111111fffffffffffff1111ffffffffffffffffffffff111111111111111111fffffffffff
            ff111111111111ffffff111111111111fffffff111111111111bbbf111111ffffffffffff1111111111111111111fffffffffffff1111ffffffffffffffffffffff111112221112221111fffffffffff
            ff111111111111ffffff111111111111fffffff111111111111bbbf111111ffffffffffff1111111111111111111fffffffffffff1111ffffffffffffffffffffff111112221112221111fffffffffff
            ff111111111111ffffff111111111111fffffff1111111111111111111111ffffffffffff1111111111111111111fffffffffffff1111ffffffffffffffffffffff111112221112221111fffffffffff
            ff111111111111ffffff111111111111fffffff1111111111111111111111ffffffffffff111111bbbf111111111fffffffffffff11111111111111bfffffffffff111112222222221111fffffffffff
            ff111111111111ffffff111111111111fffffff1111111111111111111111ffffffffffff111111bbbff11111111fffffffffffff11111111111111bfffffffffff111112222222221111fffffffffff
            ff111111111111ffffff111111111111fffffff111111bbb1111111111111ffffffffffff111111bbbff11111111fffffffffffff1111ffffffffffffffffffffff111112222222221111fffffffffff
            ff111111111111ffffff111111111111fffffff111111bbb1111111111111ffffffffffff111111fffff11111111fffffffffffff1111ffffffffffffffffffffff111111112221bbbffffffffffffff
            ff111111111111ffffff111111111111fffffff111111bbb1111111111111ffffffffffff111111fffffbbb11111fffffffffffff1111ffffffffffffffffffffff111111112221bbbffffffffffffff
            ff111111111111ffffff111111111111fffffff111111fffbbb1111111111ffffffffffff111111fffffbbb11111fffffffffffff1111111111111111ffffffffff111111111111bbbffffffffffffff
            ff111111111111ffffff111111111111fffffff111111fffbbb1111111111ffffffffffff111111fffffbbb11111fffffffffffff1111111111111111ffffffffff111111bbb111111111fffffffffff
            ff111111111111fffbbb111111111111fffffff111111fffbbb1111111111ffffffffffff111111fffff11111111fffffffffffff1111111111111111ffffffffff111111bbb111111111fffffffffff
            ff111111111111fffbbb111111111111fffffff111111ffffffbbb1111111ffffffffffff1111111111111111ffffffffffffffff1111111111111111ffffffffff111111bbb111111111fffffffffff
            ff111111111111111bbb111111111111fffffff111111ffffffbbb1111111ffffffffffff1111111111111111ffffffffffffffff1111111111111111ffffffffff111111ffffff111111fffffffffff
            ff111111111111111111111111111111fffffff111111ffffffbbb1111111ffffffffffff1111111111111111ffffffffffffffff1111111111111111ffffffffff111111ffffff111111fffffffffff
            ff111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff1111111111111111bbffffffffbbb1111111111111111111fffffffbb111111111111111ffffffffbbb111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff1111111111111111bbffffffffbbb1111111111111111111fffffffbb111111111111111ffffffffbbb111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111111111111111ffffffff1111111111111111111111fffffff11111111111111111ffffffffbbb111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111111111111111ffffffff1111111111111111111111fffffff11111111111111111ffffffff111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111111111111111ffffffff1111122211122211111111fffffff11111111111111111ffffffff111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff1111111fffff111111ffffffff1111122211122211111111fffffff11111111111111111ffffffff111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff1111111fffff111111ffffffff1111122211122211111111fffffff11111111111111111fffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111111111111111ffffffff1111122222222211111111fffffff11111111111111111fffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff11111111111111bbffffffffff1111122222222211111111fffffff11111111111bffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff11111111111111bbffffffffff1111122222222211111111fffffff11111111111bffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111bbffffffffffffffffff1111111122211111111111fffffff11111111111111111fffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111bbffffffffffffffffff1111111122211111111111fffffff11111111111111111fffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111ffffffffffffffffffff1111111122211111111111fffffff11111111111111111fffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111ffffffffffffffffffff1111111111111111111111fffffff11111111111111111fffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111ffffffffffffffffffff1111111111111111111111fffffff11111111111111111fffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111ffffffffffffffffffff1111111111111111111111ffffffffffffb11111111111fffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111ffffffffffffffffffff1111111ffffbb111111111ffffffffffffb11111111111fffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111ffffffffffffffffffff1111111ffffbb111111111fffffff11111111111111111fffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111ffffffffffffffffffff1111111ffffff111111111fffffff11111111111111111fffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111ffffffffffffffffffff1111111ffffff111111111fffffff111111111111111bbfffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffff111111ffffffffffffffffffff1111111ffffff111111111fffffff111111111111111bbfffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        play = sprites.create(img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ......11111111111111111111111111111111111111......
            .....11....................................1......
            .....1...111........1......................1......
            .....1..11.111......1......................1......
            .....1.11....1......1......................1......
            .....1.1.....11.....1......................1......
            .....1.1.....11.....1................11..1.1......
            .....1.1111111......1.................11.1.1......
            .....1.1............1......111111......111.11.....
            .....1.1............1......1....11.....11..11.....
            .....1.1............1......1....11......1..11.....
            .....1.1............1......1....11......1..11.....
            .....1.1............1......1...1111....1...1......
            .....1.1...................11111.......1...1......
            .....1.1...............................1...1......
            .....1................................111111......
            .....11111111111111111111111111111111111...1......
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `, SpriteKind.button)
        cursor = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(cursor)
        play.setPosition(74, 105)
    }
    if (level == 1) {
        play.destroy(effects.spray, 500)
        controller.moveSprite(play)
        story.queueStoryPart(function () {
            story.printText("MT.EBOTT 190X", 80, 100)
            scene.setBackgroundImage(img`
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111119999999999999999999999999
                9999999999999999999999999999991111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111199999999999999999999999
                9999999999999999999999911111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999
                9999999999999999999999111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111119999999999999999999999
                9999999999999999999991111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111999999999999999999999
                9999999999999999999911111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111199999999999999999999
                9999999999999999991111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111199999999999999999999
                9999999999999999911111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111999999999999999999999
                9999999999999999111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111119999999999999999999999
                9999999999999991111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111119999999999999999999999
                9999999999999911111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111119999999999999999999
                9999999999999111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111119999999999999999
                9999999999991111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111199999999999999
                9999999999911111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111999999999999
                9999999999111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111199999999999
                9999999991111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111199999999999
                9999999911111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111199999999999
                9999999111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111199999999999
                9999991111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111999999999999
                9999999111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111119999999999999999
                9999999911111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999977777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999997777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999997777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999
                99999999999999999999999999999999999999999999999999999999999997777777777777777777777.7999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999997777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999977777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999997777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999977777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999
                9999999999999999999999999999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999
                9999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999
                9999999999999999999999999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999
                9997777777777777777777777799777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999999999999999999999
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999999999999999999
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999999999999999
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999999999999
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999977
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fff777777777777777
                77777777777777777777777ff7777777777ff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff7777777fff77777777777f77777
                777777777777777777777777fff77777777f77777777777777777777ff7777777777777777777777777777777777777777777777777777777777777777777777777fff777fffff777777777777ff7777
                77777777777777f7777ff77777fff777ffff77777777777777777777ff777ff7777777777777777777777777777777777777777777777777777777777777ff777777ffff7fff7777777777777fff7777
                77777777777777f77777fff7777ffff7fff77777777777777777777ff7777fff77777777f77f777777777777777777777777777777777777777777777777ff7777777ffffff77777777777777ff77777
                7777ff7777777ff777777ffff777ffffff77777777777777777777ff77777ff77777777fff7fff7777777f77777777777777777777777777777777777777fff7777777fffff7777777777777ff7fffff
                77777ff77777ff77777777ffff77777fff77777777777777777777f77777ff777777777ff777fffff777f7777777777777777777777777ff777777ff7777fff77777777fffffffffffffffffffffffff
                77777ffff777f77777777777fff7777ff777777777777777777777ffff7ff7777777777ff7777fffffffff7777ff777777777777777777ffff777ff777777ff777f77777ffffffffffffffffffffffff
                77777777ff7ff777777ff777fff777fff777f777ff7777ff7777777fffff7777777777fff77777777fffff77777ff777777777777ff77777fff7ff77777777ffff7777ffffffffffffffffffffffffff
                777777777ffff77777ff777777ff77ff777ff7777ffffff7777777777ffff777777777ff777777777ffff77777777ff77777777fff7777777fffff77777777ffff77ffffffffffffffffffffffffffff
                7777777777fff77777ff7777777ff7ff777f777777ffff777777777777fff777777777ff777fff777fff777777777ffff7777fff77777777777ff777777777ffffffffffffffffffffffffffffffffff
                7777777777ff77777ff777777777ffff77ff7777777fff77777fffffffffff7fff777fff77fff7fffff77777777777fff777fff777ffff7777fff777777777ffffffffffffffffffffffffffffffffff
                77777777ffffffffffffffffffffffffffff77777ffff77fffffffff7fffffffff777ff7fffffffffff7777777777777ff7fff7777ffff777fff77777777ffffffffffffffffffffffffffffffffffff
                f777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777ffff77777ffff777ff7777777ffffffffffffffffffffffffffffffffffffff
                f7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777ff777777ffff777fffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fff7777777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
        })
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.button, function (sprite, otherSprite) {
    let othersprite = false
    if (othersprite == (play && controller.A.isPressed())) {
        level = 1
        Level()
    }
})
let cursor: Sprite = null
let play: Sprite = null
let level = 0
level = 0
Level()

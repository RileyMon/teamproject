scene.setBackgroundColor(3)
let hiAlexa = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f . f . f . . 5 5 5 5 5 5 5 . 
    . f . f . f . . 5 5 f 5 f 5 5 . 
    . f f f . f . . 5 5 5 5 5 5 5 . 
    . f . f . f . . 5 f 5 5 5 f 5 . 
    . f . f . f . . 5 f 5 5 5 f 5 . 
    . f . f . f . . 5 5 f f f 5 5 . 
    . . . . . . . . 5 5 5 5 5 5 5 . 
    . . . . . . . . . . . . . . . . 
    f f f . f . f f . f . f . f f f 
    f . f . f . f . . f . f . f . f 
    f . f . f . f . . . f . . f . f 
    f f f . f . f f . . f . . f f f 
    f . f . f . f . . f . f . f . f 
    f . f . f f f f . f . f . f . f 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let alexa = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . . f e e e e e e f . . . . 
    . . . f e e e e e e e e f . . . 
    . . f e e e e e e e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . f e e e e e d d e e e e e f . 
    . f e e f f d d d d f f e e f . 
    . f e e f b 6 d d 6 b f e e f . 
    . f e e d 1 6 d d 6 1 d e e f . 
    f f e e f d d d d d d f e e f f 
    f e e f f f d d d d f f f e e f 
    . f e e f b 7 7 7 7 b f e e f . 
    . . e 4 c 7 7 7 7 7 7 c 4 e . . 
    . . e f b 7 b 7 b 7 b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
alexa.setPosition(18, 58)
let Riley = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f 5 5 5 5 5 5 5 5 f . . . 
    . . f 5 5 5 5 5 5 5 5 5 5 f . . 
    . . f 5 5 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 d 5 5 d d 5 5 d 5 5 f . 
    . f 5 5 f f d d d d f f 5 5 f . 
    . f 5 5 f 9 f d d f 9 f 5 5 f . 
    . f 5 5 d 1 f d d f 1 d 5 5 f . 
    f f 5 5 f d d d d d d f 5 5 f f 
    f 5 5 f f f 4 4 4 4 f f f 5 5 f 
    . f 5 5 f 3 4 4 4 4 3 f 5 5 f . 
    . . 5 4 3 4 4 4 4 4 4 3 4 5 . . 
    . . 5 f 3 3 3 4 3 4 3 3 f 5 . . 
    . . . f f 1 4 1 4 1 4 f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
Riley.setPosition(142, 57)

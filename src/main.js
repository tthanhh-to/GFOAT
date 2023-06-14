//included physics systems, cameras, particle effects, text objects, the animation manager, tilemaps
let config={
    type: Phaser.CANVAS,
    render:{
        pixelArt:true
    },
    width:480,
    height:320,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:{
        default:'arcade',
        arcade:{
            debug: true
        }
    },
    zoom: 1.5,
    scene: [load,title,credits,play1,yearLater,play2]
}
let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keySPACE,keyC; 

const game=new Phaser.Game(config);
//https://reakain.itch.io/gb-studio-7-11-tileset
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
    scene: [load,title,play1,yearLater,play2]
}
let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keySPACE; 

const game=new Phaser.Game(config);
//https://reakain.itch.io/gb-studio-7-11-tileset
let config={
    type: Phaser.CANVAS,
    render:{
        pixelArt:true
    },
    width:240,
    height:160,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:{
        default:'arcade',
        arcade:{
        //    debug: true
        }
    },
    zoom: 3,
    scene: [title,play1,play2]
}
let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keySPACE; 

const game=new Phaser.Game(config)
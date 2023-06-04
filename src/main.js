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
            debug: true
        }
    },
    zoom: 3,
    scene: [play1]
}
const game=new Phaser.Game(config)
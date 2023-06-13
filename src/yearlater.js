class yearLater extends Phaser.Scene {
    constructor() {
        super('laterScene');
    }
    create(){
        let menuConfig = {
            fontFamily: 'Oranienbaum',
            fontSize: '50px',
            color: '#ffffff',
            align: 'center',

            fixedWidth: 0
        }
        this.add.text(70, game.config.height/2.2, "ONE YEAR LATER",menuConfig);
        this.clock = this.time.delayedCall(3000, () => {
            this.scene.start("play2Scene");
        }, null, this);
    }
}
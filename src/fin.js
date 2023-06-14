class fin extends Phaser.Scene {
    constructor() {
        super('finScene');
    }
    create(){
        let menuConfig = {
            fontFamily: 'Oranienbaum',
            fontSize: '50px',
            color: '#ffffff',
            align: 'center',

            fixedWidth: 0
        }
        this.add.text(70, game.config.height/2.2, "FIN",menuConfig);
        this.clock = this.time.delayedCall(3000, () => {
            this.scene.start("title");
        }, null, this);
    }
}
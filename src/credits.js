class credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }
    create(){
        this.background=this.add.image(240, 160, 'creditsImg').setScale(.18);
        let menuConfig = {
            fontFamily: 'Oranienbaum',
            fontSize: '12px',
            color: '#ffffff',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(0,0, "PRESS R TO RETURN TO MENU",menuConfig);
        menuConfig.fontSize=20;
        this.add.text(200,20, "CREDITS",menuConfig);
        menuConfig.fontSize=17;
        this.add.text(50,60, "CREATED BY THANH TO",menuConfig);
        this.add.text(50,90, "MUSIC: TYLER SY",menuConfig);
        this.add.text(50,120, "TILEMAP: https://reakain.itch.io/gb-studio-\n7-11-tileset",menuConfig);
        this.add.text(50,170, "MENU IMAGE: https://www.freepik.com/free-\nvector/gradient-black-bcackgrounds-with-\ngolden-frames_19852276.htm",menuConfig);
        this.add.text(50,245, "CREDITS IMAGE: https://www.freepik.com/free-\nvector/gradient-black-backgrounds-with-\ngolden-frames_19852276.htm",menuConfig);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('title');
        }
    }
}
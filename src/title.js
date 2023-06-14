class title extends Phaser.Scene{
    constructor(){        
        super({key:"title"});

    }
    create(){
        this.background=this.add.image(240, 160, 'titleImg').setScale(.18);
        let menuConfig = {
            fontFamily: 'Oranienbaum',
            fontSize: '50px',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(103,80, "LAST YEAR AT \nMARIENBAD",menuConfig);
        menuConfig.fontSize=20;
        
        this.add.text(125,190, "USE ARROW KEYS TO MOVE",menuConfig);
        this.add.text(125,220, "PRESS SPACE TO PLAY",menuConfig);
        this.add.text(125,280, "PRESS C FOR CREDITS",menuConfig);
        
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("play1Scene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.scene.start("creditsScene");
        }
    }
}
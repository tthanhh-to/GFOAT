class title extends Phaser.Scene{
    constructor(){        
        super({key:"title"});

    }
    create(){
        let menuConfig = {
            fontFamily: 'Oranienbaum',
            fontSize: '20px',
            backgroundColor: '#ffffff',
            color: '#000000',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(70,50, "LAST YEAR AT MARIENBAD\n press space to continue",menuConfig);
        this.add.text(70,200, "USE ARROWS TO MOVE",menuConfig);
        
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("play1Scene");
        }
    }
}
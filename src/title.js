class title extends Phaser.Scene{
    constructor(){        
        super({key:"title"});

    }
    create(){
        this.add.text(100,100, "Last year at marienbad, press space to continue");
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("play1Scene");
        }
    }
}
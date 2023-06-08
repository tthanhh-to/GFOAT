class play2 extends Phaser.Scene{
    constructor(){        
        super({key:"play2Scene"});

    }
    create(){
        this.add.text(100,100, "next scene");
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }
    update(){
    
    }
}
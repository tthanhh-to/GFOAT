class play2 extends Phaser.Scene{
    constructor(){        
        super({key:"play2Scene"});

    }
    create(){
        this.add.text(100,100, "next scene");
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        const map=this.add.tilemap('tilemapJSON2');
        const seven_eleven_tileset= map.addTilesetImage('seven_eleven_tileset', 'tilesetImage');

        //adding each layer from the tilemap
        const floorLayer=map.createLayer('floor',seven_eleven_tileset,0,0);
        const wallLayer=map.createLayer('walls',seven_eleven_tileset,0,0);
        this.add.sprite(420,280,'M');

        this.aback=this.physics.add.sprite(440,280,'Aback',0);
        this.aback.body.setSize(40,40);
        this.a=this.physics.add.sprite(440,280,'A',0);

        this.heart=this.add.sprite(450,20,'heart_atlas','sprite7')
        this.heart.setAlpha(0);
    }
    update(){
    
    }
}
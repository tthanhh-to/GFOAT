class play1 extends Phaser.Scene{
    constructor(){
        super({key:"play1Scene"});
        this.VEL=100;
    }

    preload(){
        //loading images and tilemaps
        this.load.path='./assets/';
        this.load.image('X','focus1.png');  
        this.load.image('A','A1.png');
        this.load.image('Aback','Aback.png');
        this.load.image('tilesetImage','seven_eleven_tileset.png');
        this.load.tilemapTiledJSON('tilemapJSON','area01.json');
        this.load.audio('play_music', 'GFOATmusic.wav');
    }

    create(){
        let menuConfig = {
            fontFamily: 'Oranienbaum',
            fontSize: '10px',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //loading tilemap
        const map=this.add.tilemap('tilemapJSON');
        const seven_eleven_tileset= map.addTilesetImage('seven_eleven_tileset', 'tilesetImage');

        //adding each layer from the tilemap
        const floorLayer=map.createLayer('floor',seven_eleven_tileset,0,0);
        const wallLayer=map.createLayer('walls',seven_eleven_tileset,0,0);

        //adding x sprite and scaling it down in size to fit
        this.x=this.physics.add.sprite(75,75,'X',0).setScale(.6);
        //setting the hitbox of the sprite to make sure it fits through the spaces 
        this.x.body.setSize(16,16);
        this.add.text(10,0, "PRO TIP: HOLD DOWN MULTIPLE ARROWS AT ONCE",menuConfig);
        this.a=this.physics.add.sprite(440,280,'A',0);

        this.aback=this.physics.add.sprite(440,280,'Aback',0);
        this.aback.body.setSize(40,40);

        //setting x to collide with the world bounds and with the maze walls 
        this.x.body.setCollideWorldBounds(true);
        wallLayer.setCollisionByProperty({collides:true});

        this.physics.add.collider(this.x,wallLayer);
        this.physics.add.collider(this.x,this.Aback);
        this.a.setImmovable(true);
        this.x.body.onOverlap = true;

        this.physics.add.overlap(this.x, this.a); // collision between coin and player


        this.physics.world.on('overlap', (player, a) => {
            a.destroy();
            this.scene.start("play2Scene");

        });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               


        //creates the cursor keys to register when playing the game 
        this.cursors=this.input.keyboard.createCursorKeys();
        //adding music 
        this.music =  this.sound.add('play_music', {
            volume: 0.2,
            loop: true
        })
        this.music.play()
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }
    update(){
//        this.x.hit = this.x.body.touching; 
        //adding movement
        this.physics.collide(this.x, this.a);
        this.direction=new Phaser.Math.Vector2(0);
        if(this.cursors.left.isDown){
            this.direction.x=-2;
        }
        else if(this.cursors.right.isDown){
            this.direction.x=2;
        }
        if(this.cursors.up.isDown){
            this.direction.y=-2;
        }
        else if(this.cursors.down.isDown){
            this.direction.y=2;
        }
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("play2Scene");
        }
        this.direction.normalize();
        //adding movement to x
        this.x.setVelocity(this.VEL*this.direction.x,this.VEL*this.direction.y);
   }

}
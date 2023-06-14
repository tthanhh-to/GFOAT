class play2 extends Phaser.Scene{
    constructor(){        
        super({key:"play2Scene"});
        this.VEL=100;

    }
    create(){
        const map=this.add.tilemap('tilemapJSON2');
        const seven_eleven_tileset= map.addTilesetImage('seven_eleven_tileset', 'tilesetImage');

        //adding each layer from the tilemap
        const floorLayer=map.createLayer('floor',seven_eleven_tileset,0,0);
        const wallLayer=map.createLayer('walls',seven_eleven_tileset,0,0);

        this.add.sprite(420,280,'M');

        //adding x sprite and scaling it down in size to fit
        this.x=this.physics.add.sprite(30,30,'X',0).setScale(.6);
        //setting the hitbox of the sprite to make sure it fits through the spaces 
        this.x.body.setSize(16,16);
        
        this.aback=this.physics.add.sprite(440,280,'Aback',0);
        this.aback.body.setSize(40,40);
        this.a=this.physics.add.sprite(440,280,'A',0);

        this.heart=this.add.sprite(470,10,'heart_atlas','sprite1').setScale(.5);

        this.anims.create({
            key:"heartEmpty",
            frameRate:10,
            frames: this.anims.generateFrameNames("heart_atlas", {
                prefix:"sprite",
                start: 1,
                end:7
            })
        });
        //setting x to collide with the world bounds and with the maze walls 
        this.x.body.setCollideWorldBounds(true);
        wallLayer.setCollisionByProperty({collides:true});

        this.physics.add.collider(this.x,wallLayer);
        this.a.setImmovable(true);
        this.x.body.onOverlap = true;
        this.physics.add.overlap(this.x, this.a); // collision between coin and player

        this.physics.world.on('overlap', (player, a) => {
            this.aback.setAlpha(0);
            this.music.stop();
            this.heart.anims.play('heartEmpty');
            this.clock = this.time.delayedCall(3000, () => {
                this.scene.start("remindScene");
            }, null, this);
        });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

        //creates the cursor keys to register when playing the game 
        this.cursors=this.input.keyboard.createCursorKeys();
        //adding music 
        this.music =  this.sound.add('play_music', {
            volume: 0.2,
            loop: true
        })
        this.music.play();
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update(){
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
        this.direction.normalize();
        //adding movement to x
        this.x.setVelocity(this.VEL*this.direction.x,this.VEL*this.direction.y);
    }
}
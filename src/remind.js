class remind extends Phaser.Scene{
    constructor(){        
        super({key:"remindScene"});
        this.VEL=100;
    }
    
    create(){
        const map=this.add.tilemap('tilemapJSON3');
        const seven_eleven_tileset= map.addTilesetImage('seven_eleven_tileset', 'tilesetImage');

        //adding each layer from the tilemap
        const floorLayer=map.createLayer('floor',seven_eleven_tileset,0,0);
        const wallLayer=map.createLayer('walls',seven_eleven_tileset,0,0);

        this.ax=this.physics.add.sprite(50,50,'AX',0).setScale(.9);
        //adding x sprite and scaling it down in size to fit
        // this.x=this.physics.add.sprite(30,30,'X',0).setScale(.6);
        // //setting the hitbox of the sprite to make sure it fits through the spaces 
        this.ax.body.setSize(30,14);
        
        this.heart=this.add.sprite(470,10,'heart_atlas','sprite7').setScale(.5);
        //right corner
        this.h1=this.add.sprite(410,55,'heart_atlas','sprite1').setScale(.25);
        //left corner
        this.h2=this.add.sprite(60,100,'heart_atlas','sprite1').setScale(.25);
        //bottom left
        this.h3=this.add.sprite(120,270,'heart_atlas','sprite1').setScale(.25);
        //left middle
        this.h4=this.add.sprite(175,165,'heart_atlas','sprite1').setScale(.25);
        //right middle
        this.h5=this.add.sprite(325,240,'heart_atlas','sprite1').setScale(.25);

        //setting x to collide with the world bounds and with the maze walls 
        this.ax.body.setCollideWorldBounds(true);
        wallLayer.setCollisionByProperty({collides:true});

        this.physics.add.collider(this.ax,wallLayer);
        this.ax.body.onOverlap = true;
        this.physics.add.overlap(this.ax, this.h1); // collision between coin and player
        this.physics.add.overlap(this.ax, this.h2); // collision between coin and player
        this.physics.add.overlap(this.ax, this.h3); // collision between coin and player
        this.physics.add.overlap(this.ax, this.h4); // collision between coin and player
        this.physics.add.overlap(this.ax, this.h5); // collision between coin and player

        // this.physics.world.on('overlap', (player, h) => {
        //     this.aback.setAlpha(0);
        //     this.heart.anims.play('heartEmpty');
        //     // this.clock = this.time.delayedCall(5000, () => {
        //     //     this.scene.start("laterScene");
        //     // }, null, this);
        // });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

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
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("laterScene");
        }
        this.direction.normalize();
        //adding movement to x
        this.ax.setVelocity(this.VEL*this.direction.x,this.VEL*this.direction.y);
    }
}
class load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, game.config.height/2, 1000 * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        // set load path
        this.load.path = 'assets/';
        // take care of all of our asset loading now
        this.load.image('X','focus1.png');  
        this.load.image('A','A1.png');
        this.load.image('Aback','Aback.png');
        this.load.atlas('heart_atlas', 'heart.png', 'hearts.json');
        this.load.image('tilesetImage','seven_eleven_tileset.png');
        this.load.tilemapTiledJSON('tilemapJSON','area01.json');
        this.load.audio('play_music', 'GFOATmusic.wav');
    }

    create() {
        // ...and pass to the next Scene
        this.scene.start('title');
    }
}
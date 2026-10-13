class Main extends Phaser.Scene {
    constructor() {
        super({ key: 'main' });
    }
//game config 
//variables del estado de juego 
    this.TURNOS = 20;
    this.PLAYER_CLICKS = 0;
//variables de personaje 

    this.STAMINA = 100;
    this.HUNGER = 0;
    this.AFFINITY = 10;
    this.HAPPINESS = 90;
    this.SLEEPNESS = 10;
    this.SCORE = 0; 




    preload() {
		this.load.image('room', 'assets/bg1.jpg')
		
        this.load.image('REST_POSE', 'assets/RiceShowerChibi1.jpeg');
        this.load.image('POSE1', 'assets/RiceShowerChibi2.png');
        
        
        this.load.image('btn', 'assets/button.png');
    }

    create() {
        
       
        
    
     /*   this.action1 = this.add.text(150, 550, "GREET", { fontSize: '32px', fill: '#fff' }).setOrigin(0.4);
        this.action2 = this.add.text(300, 550, "WALK", { fontSize: '32px', fill: '#fff' }).setOrigin(0.4);
        this.action3 = this.add.text(450, 550, "STUDY", { fontSize: '32px', fill: '#fff' }).setOrigin(0.4);
        */
      this.bg = this.add.image(0,0 , ''bg)
        this.rice = this.add.image(400, 450, 'REST_POSE');
     
        this.rice.setScale(1.2); 
        
    
    
        this.btn = this.add.image (400,100, 'btn');
        //  this.btn = this.add.image (100,100, 'btn');
            //this.btn = this.add.image (800,100, 'btn');
            
      
this.btn.setScale(1.2); 

        //use frameWIdth & frameHeight 
     //   this.btn.setDisplaySize(300, 150); //height d width
     
        
        this.btn.setInteractive({useHandCursor: true});
        this.btn.on('pointerdown', () => this.RiceTalk());
         this.add.text(400, 100, 'JUMP', { fontSize: '20px', fill: '#fff' }).setOrigin(0.5);
        
    };

   RiceTalk() {
    this.rice.setTexture("POSE1");
    const ricePosY = this.rice.y;
    
    this.tweens.add({
        targets: this.rice,
        y: ricePosY - 40,
        duration: 300,
        repeat: 2,
        ease: 'Quad.easeOut',
        scaleX: 1.1,
        scaleY: 1.1,
        yoyo: true,	
        onComplete: () => { 
            this.rice.setTexture('REST_POSE');
        }
    });
  }
}











const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: [Main],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH	
    }
};

const game = new Phaser.Game(config);

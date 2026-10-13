class Main extends Phaser.Scene {
    constructor() {
        super({ key: 'main' });
    
//game player config  var
    this.PLAYER_CLICKS = 0;
    this.MAX_PLAYERTURNS = 20;
    this.SCORE = 0; 
  
//characther stats
	this.STATS = {
			HAPPINES : 90,
			STAMINA: 100,
			AFFINITY: 10,
			HUNGER: 0
			};	
			//reference to ingame labels  
	this.labels = {};
			
   }

   
   
   

    preload() {
		        this.load.image('btn', 'assets/button.png');

		
		/*
		this.load.image('room', 'assets/bg1.jpg')
		
        this.load.image('REST_POSE', 'assets/RiceShowerChibi1.jpeg');
        this.load.image('POSE1', 'assets/RiceShowerChibi2.png');
        
        this.load.image('btn', 'assets/button.png');
    }
*/

	  preload(){
		this.load.image('btn', 'assets/button.png');
};

	 create() {
		let clickCount = 0 ;
		let labelCounter;
	
		this.labelCounter =  this.add.text(10,10, 'Total Click ' +  clickCount ,({fill: '#ffff'  ,  fontSize: '20px'});
		this.add.image(200,150, 'btn' + clickCount)
		
	
	 actionClick(){
		clickCount++;
		labelCounter.setText('Total clicks:  ' + clickCount)
		};	
     }
   };




/*
    create() {
        
        this.action1 = this.add.text(150, 550, "GREET", { fontSize: '32px', fill: '#fff' }).setOrigin(0.4);
        this.action2 = this.add.text(300, 550, "WALK", { fontSize: '32px', fill: '#fff' }).setOrigin(0.4);
        this.action3 = this.add.text(450, 550, "STUDY", { fontSize: '32px', fill: '#fff' }).setOrigin(0.4);
        
        
        this.bg = this.add.image(this.scale.width / 2, this.scale.height / 2, "room")
	
	
	//personaje
        this.rice = this.add.image(400, 450, 'REST_POSE');
        this.rice.setScale(1.2); 
       
        
		this.btn = this.add.image (400,100, 'btn');
		this.btn.setScale(1.2); 
		this.btn.setInteractive({useHandCursor: true});
		this.btn.on('pointerdown', () => this.RiceJump());
		
		this.add.text(400, 100, 'JUMP', { fontSize: '20px', fill: '#fff' }).setOrigin(0.5);
		//this.btn = this.add.image (100,100, 'btn');
		//this.btn = this.add.image (800,100, 'btn');
		//use frameWIdth & frameHeight //this.btn.setDisplaySize(300, 150); //height d width
		
		 this.label.STAMINA = this.add.text(10,20, 'STAMINA :  100',
        {fontSize: '20px', fill: '#fff'});
		 
		 
     
     
     //continue...
    };
    
    refreshStats(){
		//reresh stats set stats to zero andset player turn to MAX_PLAYERTURNS = 20
		}    
    RicePlays(){
		this.stats.STAMINA -=15;
		
		this.labels.STAMINA.text =  "STAMINA: " + this.stats,STAMINA
		 console.log("se le resto a: ", ${this.stats.STAMINA},"15 pts")	
		
		}
    
    RiceSleep(){
		if(this.stats.STAMINA >= 60);
		   
		
	this.rice.setTexture('SLEEP');
	this.stats.STAMINA +=10;
	
	
	};
    

   RiceJump() {
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
    });//tween ends

  }//create() ends 
  
  */








//game object config separado en un game.js 
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

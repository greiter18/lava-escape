import Game from './game';

export default class Player {
  constructor(game) {
    this.game = game;
    this.img = document.getElementById('imgPlayer');
    this.sound = document.getElementById('jump')
    this.platforms = game.platforms
    this.startPlatform = game.startPlatform
    this.canvas = game.canvas
    this.mute = game.mute
    this.width = 50;
    this.height = 60;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.onGround = false
    this.onPlatform = false
    this.velocity_y = 0;
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      // y: game.gameHeight - this.height};
      y: 20};
    document.addEventListener('keydown', e => {
      this.canvas.keys = (this.canvas.keys || []);
      this.canvas.keys[e.key] = true;
      if(this.canvas.keys[' '] && (this.onPlatform || this.onGround)){
        this.velocity_y -= 45
        this.onGround = false
        this.onPlatform = false
        this.sound.play()
      }
    })
    document.addEventListener('keyup', e => {
      this.canvas.keys[e.key] = false;
    })
  };

     draw(ctx){
      ctx.fillStyle = 'blue'
      ctx.drawImage(this.img, this.position.x, this.position.y += this.velocity_y, this.width, this.height);
    };

    checkLandedOnPlatform(yCord){              
      return ((this.position.y + this.height  > (yCord - 8) ) && (this.position.y + this.height <= yCord + 50) )                                                                                                  //platform height
      }

    checkWithinPlatform(platform){
      let platWidth = platform.width //platform width
      let platPos = platform.position.x // plaform left side position
      let platEndPos = platPos + platWidth // plaftorm right side position
      let playerPost = this.game.player.position.x //players x position
      return playerPost > (platPos - 50) && playerPost < platEndPos ;
    }

    gravity(){
       if (!this.onGround && !this.onPlatform) {
        this.velocity_y += 4.0
        // console.log(this.velocity_y)
      }
    }

    gameOn(){
      if(this.onGround){
        this.gameOver()
      }
    }
  
    update(dt) {
      if (!dt) return;
      //controller logic
      if (this.canvas.keys && this.canvas.keys['ArrowLeft']) {this.position.x += -8}
      if (this.canvas.keys && this.canvas.keys['ArrowRight']) {this.position.x += 8}
      if (this.canvas.keys && this.canvas.keys['ArrowDown'] && this.onPlatform) {this.position.y += 15}
      // if (this.canvas.keys && this.canvas.keys['ArrowUp']){
      //   this.game.paused = !this.game.paused
      // }
      // if (this.canvas.keys && this.canvas.keys['ArrowUp']) {
      //   this.game.gameOver()
      // }
      //level collission logic
      //height check
      if((!this.onGround && this.velocity_y >= 0) && ((this.position.y + this.height) >= this.gameHeight )){
        this.onGround = true
        this.velocity_y = 0
        this.position.y = (this.gameHeight - this.height)
        // console.log('game over man')
        this.game.gameOver()
      }
      
  
      //width check
      // if (this.position.x < 0) this.position.x = 0
      // if (this.position.x + this.width > this.gameWidth) {
      //   this.position.x = this.gameWidth - this.width
      // }
      if (this.position.x < 0) this.position.x = this.gameWidth - this.width
      if (this.position.x > this.gameWidth) {
        this.position.x = 0
      }
      //checking if player is on platform 
      this.onPlatform = false
      this.platforms.forEach(platform => {
        // if (this.checkLandedOnPlatform(platform.position.y) && this.checkWithinPlatform(platform) && 
        // !this.onGround && this.velocity_y >= 1) {
        //   this.onPlatform = true
        //   this.velocity_y = platform.velocity_y
        // } 
        if(
          (this.position.y + this.height >= platform.position.y - 8) && // bottom of player is greater than the bottom of gem
          (this.position.y + this.height <= platform.position.y + 30) && 
          (this.position.x + this.width >= platform.position.x) &&
          (this.position.x  <= platform.position.x + platform.width) && 
          !this.onGround && 
          this.velocity_y >= 1
          ){
            this.onPlatform = true
            this.velocity_y = platform.velocity_y
          debugger
            } 
      });
     this.gravity();
    };
}


export default class Gem{
  constructor(game){
    this.sound = document.getElementById('gemSound')
    let xcord = Math.floor(Math.random() * 450) + 25;
    let ycord = Math.floor(Math.random() * 500) + 100;
    this.height = 25;
    this.width = 25;
    this.img = document.getElementById('gem');
    this.position = {x: xcord, y: ycord}
    this.player = game.player
    this.game = game
    this.score = game.score
    this.mute = game.mute
  }

  draw(ctx) {
    ctx.drawImage(this.img,this.position.x, this.position.y, this.width, this.height);     
  };

 removeGem(){
  let index = this.game.gems.indexOf(this)
  this.game.gems.splice(index,1)
  this.game.score += 200
  this.sound.play()
 } 

//Player gem collission logic
  playerGemHeight(playerY){
    // console.log('height--------------',this.position.y + this.height)
    // return ((yCord - 8) > this.position.y + this.height  && this.position.y + this.height)
    // return (this.position.y + this.height > (player + 60) && this.position.y + this.height)
    return (((this.position.y + this.height ) <= (playerY)) && ( (playerY + 50) >= this.position.y))
    // return (this.position.y)
  }
  playerGemwidth(player){
    debugger
    let playWidth = player.width // player width
    let playPos = player.position.x // player left side
    let playEndPos = playWidth + playPos // player right side
    let gemPost = this.position.x // gem x start position
    return playEndPos > gemPost && playPos < gemPost + this.width
  }

  update(ctx) { 
    // if(this.playerGemHeight(this.player.position.y) && this.playerGemwidth(this.player)) {
      if((this.player.position.y + this.player.height >= this.position.y + this.height) && // bottom of player is greater than the bottom of gem
        (this.player.position.y <= this.position.y + this.height) && 
        (this.player.position.x + this.player.width >= this.position.x) &&
        (this.player.position.x  <= this.position.x + this.width)
      ){
      debugger
      this.removeGem()}
  }
}

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
    this.score = game.score
    this.removeGem = this.removeGem.bind(this)
    this.gems = game.gems
  }

  draw(ctx) {
    ctx.drawImage(this.img,this.position.x, this.position.y, this.width, this.height);     
  };

 removeGem(){
  console.log('gems1----------------',this)
  console.log('gems2----------------',this.gems)
  let index = this.gems.indexOf(this)
  console.log('index----------------',index)
  debugger
  this.gems.splice(index,1)
  this.score += 200
  this.sound.play()
 } 

//Player gem collission logic
  playerGemHeight(yCord){
    return (this.position.y + this.height >(yCord - 8) && this.position.y + this.height)
  }
  playerGemwidth(player){
    let playWidth = player.width // player width
    let playPos = player.position.x // player left side
    let playEndPos = playWidth + playPos // player right side
    let gemPost = this.position.x // gem x start position
    return playEndPos > gemPost && playPos < gemPost + this.width
  }

  update(ctx) { 
    if(this.playerGemHeight(this.player.position.y) && this.playerGemwidth(this.player)) this.removeGem() 
  }
}
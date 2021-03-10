## Lava Escape

[Link](https://greiter18.github.io/lava-escape/)

![demo_gif](https://user-images.githubusercontent.com/66323451/108017685-884dee00-6fe3-11eb-8a21-918d646a8455.gif)


  
### Background and overview
Erruption is an interactive platform game where the player puts their skills to the test. It's a fight against the rising lava as the player
will try to jump their way out of the volcano and not fall into the rising lava. The level will be shifting up and if the player touches the lava, the game is over. The player will try to navigate their way up and gain ground on the moving obstacles. After a certain point the speed at which the level rises will speed up. Score will be based on the players survivial time and will be granted extra points for optional items 
that can be picked up during play.

### MVP
In Lava Escape, users will be able to:
- Use SPACE to JUMP
- Use left key to move to the LEFT
- Use right key to move to the RIGHT 

In addition, the project will include:
- The screen shacking in the beginning

### MVP
- 1)User will be greated with the home/splash page - will ask them  to begin the game.
  There will also be a button that explains the game.
- 2)The main character will be displayed where they will descend on the opening platform.
- 3)Main gameplay - user will be jumping from obstacles only ascending vertically. This will give it the appearance the player is climbing vertically.
- 4)Scoring - Score will be detrmined by how long the player survives & by obtaining rubys which grant extra points.
- 5)When the player hits the lava- the game will be over and they user will be greeted with a prompt to restart the game and will be shown their score


### WireFrame

![Screen Shot 2021-02-08 at 11 52 27 AM](https://user-images.githubusercontent.com/66323451/107253327-3403a680-6a04-11eb-91e8-276b4b1fdcea.png)

![Screen Shot 2021-02-07 at 11 45 06 PM](https://user-images.githubusercontent.com/66323451/107176942-9c1fa180-699e-11eb-987c-b1c1ce56f2d4.png)

![Screen Shot 2021-02-07 at 4 53 42 PM](https://user-images.githubusercontent.com/66323451/107161212-349b2f00-6969-11eb-8012-3fb5c1b3a81e.png)


### Architecture and Technology
- HTML5 CANVAS
- Vanilla JavaScript

### Implementation & Timeline
- Level Design - User Instructions (1 Day)
  - Creating the platforms that the player can jump on.
- GamePlay build - (2 Days)
   - Main Player
     - Building out the main player
     - Building out Player moving Logic(jumping, moving)
   - Main Gameplay
     - Building out the vertical scroll logic
     - Incorporating player movement with the scrolling platfoms (Collision logic)
     - Building out the game over logic
- Added sound effects and scoring - (1 Day)
  - Creating a score system based on the gameplay time
  - Add sound effect when gameover

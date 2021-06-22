# sei-project-one
Frogger 

This game was my first attempt to use all the vanilla JavaScript skills I had learnt so far, 4 weeks into the General Assembly Software Engineering Immersive course. 

Task: To build a grid-based browser game with pure Javascript in a one week timeline. 

Technologies Used:
- JavaScript ES6
- HTML5
- CSS
- GitHub 

Overview:

My Frogger game was designed with a makeup theme. 
I chose to do this as it incorporated a part of my personality whilst still sticking to the original and classic functionality of the game. 
The user is in control of a lipstick which can be moved using the up, down, right and left arrows. 
The user must navigate the grid, avoiding the lids which move across the screen, hop onto the moving hands in order to avoid falling into the water with the aim of eventually landing on the home of lips. 
The player has 3 lives to achieve the goal of landing on one of the three lips available.

Once the player runs out of lives, a browser pop up informs the player that they have lost, with a message including their final score. This score then is set as the high score, and the lives are reset. If the player successfully reaches the lips, the level is increased, and so is the speed of the obstacles the player needs to avoid. If the player reaches level 3, one of the lips is removed, making the game harder. 

Development:

Once I had chosen to create my version of Frogger, I made a rough plan with set goals to reach in order to achieve an MVP of the basic functionality of the game. Then from this I was able to decide on a few extra features with hopes of being able to have time to implement them. 

Bits of code: 

1. adding and removing the lipstick/user based on the position - handlekeyup event 

In order to allow the user to control the position of the lipstick with the arrow keys I started by creating two small functions which would add the lipstick to the current position of the user. 
I then created a larger handleKeyUp function within which I used an if statement to ensure the user remained within the pre set grid for the game. This also allowed me to set out how I wanted to increase and decrease the user's score based on which direction they moved the lipstick in. 



2. SetInterval to create the formation of the hands.

I started by defining the starter positions for 11 different hand gifs in an array. Then, I created a setInterval function within which I used two forEach functions and also a map in order to ensure the hand gifs were on a constant loop. 


Challenges:

Wins:

Future Add ons:

# sei-project-one - Frogger 

This game was my first attempt to use all the vanilla JavaScript skills I had learnt so far, 4 weeks into the General Assembly Software Engineering Immersive course. 

Deployed project:  http://bit.ly/lipper1

Task: To build a grid-based browser game with pure Javascript in a one week timeline. 

Technologies Used:
- JavaScript ES6
- HTML5
- CSS
- GitHub 

## Overview:

My Frogger game was designed with a makeup theme. 
I chose to do this as it incorporated a part of my personality whilst still sticking to the original and classic functionality of the game. 
The user is in control of a lipstick which can be moved using the up, down, right and left arrows. 
The user must navigate the grid, avoiding the lids which move across the screen, hop onto the moving hands in order to avoid falling into the water with the aim of eventually landing on the home of lips. 
The player has 3 lives to achieve the goal of landing on one of the three lips available.

Once the player runs out of lives, a browser pop up informs the player that they have lost, with a message including their final score. This score then is set as the high score, and the lives are reset. If the player successfully reaches the lips, the level is increased, and so is the speed of the obstacles the player needs to avoid. If the player reaches level 3, one of the lips is removed, making the game harder. 

## Development:

Once I had chosen to create my version of Frogger, I made a rough plan with set goals to reach in order to achieve an MVP of the basic functionality of the game. Then from this I was able to decide on a few extra features with hopes of being able to have time to implement them. 
 

```Javascript 
function handleKeyUp(event) {
    const key = event.keyCode //event.keyCode finds out which key is clicked - each key registers a new number 

    removeLipstick(lipstickCurrentPosition)

    if (key === 39 && lipstickCurrentPosition % width !== width - 1) { //right
      lipstickCurrentPosition++
    } else if (key === 37 && lipstickCurrentPosition % width !== 0) { //left
      lipstickCurrentPosition--
    } else if (key === 38 && lipstickCurrentPosition >= width) { //up
      lipstickCurrentPosition -= width
      score += 10
      scoreDisplay.innerHTML = score
    } else if (key === 40 && lipstickCurrentPosition + width <= width * width - 1) { //down
      lipstickCurrentPosition += width
      score -= 10
      scoreDisplay.innerHTML = score

    } else {
      console.log('INVALID KEY')
    }
```
In order to allow the user to control the position of the lipstick with the arrow keys I started by creating two small functions which would add the lipstick to the current position of the user. 
I then created a larger handleKeyUp function within which I used an if statement to ensure the user remained within the pre set grid for the game. This also allowed me to set out how I wanted to increase and decrease the user's score based on which direction they moved the lipstick in. 



```Javascript
const lidTimer = setInterval(() => {
      road.forEach((cell, i) => {
        cell.classList.remove('lipstickLid')
      })
      lids = lids.map((index) => {
        if (index === 50) {
          return 79
        } else {
          return index - 1
        }
      })
      lids.forEach((index) => {
        cells[index].classList.add('lipstickLid')
      })
    }, 1000)
```
I started by defining the starter positions for 11 different hand gifs in an array. Then, I created a setInterval function within which I used two forEach functions and also a map in order to ensure the hand gifs were on a constant loop. 


## Challenges:

Ensuring both the hand gifs and the lipstick lids were on a constant loop was a challenge to begin with, but after some tinkering I managed to get the setInterval working to solve this issues. 

## Remaining bugs: 

The browser pop up informing the user that they have completed the level shows up before the lipstick is shown reaching the lips. 
The splash gifs which are added to the cells when/if the user falls into the river do not disappear once the user completes the level - this only happens if the game is restarted. 


## Wins:

Overcoming the obstacles I faced throughout the development of the game felt like a very exciting accomplishment, especially as this was the first project I had ever completed using JavaScript.

## Future Add ons:

Creating a smoother experience for the user. 
Allowing for the game to be usable not only on a desktop, but also on a tablet or mobile phone. 

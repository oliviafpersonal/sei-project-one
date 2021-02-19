function init() {

  const startButton = document.getElementById('start')
  const grid = document.querySelector('.grid')
  //const lipstick = document.querySelector('.lipstick')


  //button starts the game
  function startGame() {
    console.log('game has comenced', startGame)
  }
  


  const width = 10
  const cellCount = width * width 
  const cells = []

  const lipstickClass = 'lipstick'
  const lipstickStartPosition = 95
  let lipstickCurrentPosition = 95


  // creating the  game grid
  
    function createGrid(lipstickStartPosition) {
      for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div')
        cell.textContent = i
        grid.appendChild(cell)
        cells.push(cell) //pushing element(that the let loop creates) into empty array
      }
      addLipstick(lipstickStartPosition)
    }
  

  // * add lipstick to grid 
  function addLipstick(position) {
    cells[position].classList.add(lipstickClass)
  }

  //* remove lipstick from grid 
  function removeLipstick(position) {
    cells[position].classList.remove(lipstickClass)
  }

  function handleKeyUp(event) {
    const key = event.keyCode //event.keyCode finds out which key is clicked - each key registers a new number 

    removeLipstick(lipstickCurrentPosition)
    
    if (key === 39 && lipstickCurrentPosition % width !== width - 1) { //right. stops the player being able to leave the grid
      lipstickCurrentPosition++
    } else if (key === 37 && lipstickCurrentPosition % width !== 0) { //left
      lipstickCurrentPosition--
    } else if (key === 38 && lipstickCurrentPosition >= width) { //up
      lipstickCurrentPosition -= width
    } else if (key === 40 && lipstickCurrentPosition + width <= width * width - 1) { //down
      lipstickCurrentPosition += width
    } else {
      console.log('INVALID KEY')
    }
    
    addLipstick(lipstickCurrentPosition)
  }

  // adding the goal - homes 
  const lipsHomeClass = document.querySelector('.lipsHome')
  const lipsPosition = 2

  function addLips(position){
    cells[position].classList.add('.lipsHome')
    addLips(lipsPosition)
  }

  






  document.addEventListener('keyup', handleKeyUp)

  startButton.addEventListener('click', startGame)
  createGrid(lipstickStartPosition)

}


window.addEventListener('DOMContentLoaded', init)
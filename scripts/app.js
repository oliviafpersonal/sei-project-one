function init() {

  const startButton = document.getElementById('start')
  const grid = document.querySelector('.grid')
  //const lipstick = document.querySelector('.lipstick')
  const gridWrapper = document.querySelector('.grid-wrapper')

  //scores 
  const scoreDisplay = document.querySelector('#score-display')
  const livesDisplay = document.querySelector('#lives-display')
  
  let score = 0


  //button starts the game
  function startGame() {
    console.log('game has comenced', startGame)
    addLipstick(lipstickStartPosition)

    //adding the lips into the game
    cells[1].classList.add('lipsHome')
    cells[4].classList.add('lipsHome')
    cells[8].classList.add('lipsHome')
    
    //adding hand to the game 
    cells[11].classList.add('hand')
    cells[15].classList.add('hand')
    cells[19].classList.add('hand')
    cells[21].classList.add('hand')
    cells[24].classList.add('hand')
    cells[28].classList.add('hand')
    cells[30].classList.add('hand')
    cells[33].classList.add('hand')
    cells[36].classList.add('hand')
    
    
    const river = cells.slice(10, 40)
    //console.log(river)
    
    setInterval(() => {
      river.forEach((cell, index) => { 
        if (cell.className === 'hand') {
          cell.classList.remove('hand')
          river[index - 1].classList.add('hand')
        }
      })
    }, 2000)

    //adding lipstick lid to game 
    cells[50].classList.add('lipstickLid')
    cells[53].classList.add('lipstickLid')
    cells[56].classList.add('lipstickLid')
    cells[61].classList.add('lipstickLid')
    cells[65].classList.add('lipstickLid')
    cells[69].classList.add('lipstickLid')
    cells[72].classList.add('lipstickLid')
    cells[74].classList.add('lipstickLid')
    cells[79].classList.add('lipstickLid')



    const road = cells.slice(50, 80)
    //console.log(road)

    setInterval(() => {
      road.forEach((cell, index) => {
        if (cell.className === 'lipstickLid') {
          cell.classList.remove('lipstickLid')
          road[index - 1].classList.add('lipstickLid')
        }
      })
    }, 2000)




  }


  const width = 10
  const cellCount = width * width 
  const cells = []

  const lipstickClass = 'lipstick'
  const lipstickStartPosition = 95
  let lipstickCurrentPosition = 95
  let lipstickLidCurrentPosition = null

  let lidTimer 
  


  // creating the  game grid
  function createGrid(lipstickStartPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell) //pushing element(that the let loop creates) into empty array
    }


  }





  // * add lipstick to grid 
  function addLipstick(position) {
    cells[position].classList.add(lipstickClass)
  }

  //* remove lipstick from grid 
  function removeLipstick(position) {
    cells[position].classList.remove(lipstickClass)
  }

  //lipstick/player movement 
  function handleKeyUp(event) {
    const key = event.keyCode //event.keyCode finds out which key is clicked - each key registers a new number 

    removeLipstick(lipstickCurrentPosition)
    
    if (key === 39 && lipstickCurrentPosition % width !== width - 1) { //right. stops the player being able to leave the grid
      lipstickCurrentPosition++
    } else if (key === 37 && lipstickCurrentPosition % width !== 0) { //left
      lipstickCurrentPosition--
    } else if (key === 38 && lipstickCurrentPosition >= width) { //up
      lipstickCurrentPosition -= width
      score += 10
      scoreDisplay.innerHTML = score
    } else if (key === 40 && lipstickCurrentPosition + width <= width * width - 1) { //down
      lipstickCurrentPosition += width
      
    } else {
      console.log('INVALID KEY')
    }

    if (lipstickCurrentPosition === 1 || lipstickCurrentPosition === 4 || lipstickCurrentPosition === 8) {
      window.alert('You won!! Well done') 
    }
    
    addLipstick(lipstickCurrentPosition)
  }


  
  function handleInterception(event) {
    if (event.target.classList.contains('lipstickLid') && event.target.classList.contains('lipstick')) {
    //if (cells.classList.contains('lipstick') && cells.classList.contains('lipsitckLid')) {
      console.log('interception!')
    }
  }
  


  gridWrapper.addEventListener('keyup', handleInterception)


  document.addEventListener('keyup', handleKeyUp)

  startButton.addEventListener('click', startGame)
  createGrid(lipstickStartPosition)

}


window.addEventListener('DOMContentLoaded', init)



function init() {

  const startButton = document.getElementById('start')
  const grid = document.querySelector('.grid')
  const gridWrapper = document.querySelector('.grid-wrapper')

  //scores 
  const scoreDisplay = document.querySelector('#score-display')
  const livesDisplay = document.querySelector('#lives-display')
  
  let score = 0
  let livesRemaining = 3

  const width = 10
  const cellCount = width * width 
  const cells = []

  const lipstickClass = 'lipstick'
  const lipstickStartPosition = 95
  let lipstickCurrentPosition = 95
  
  

  let lidTimer 
  
  const road = cells.slice(50, 80)
  const river = cells.slice(10, 40)



  // creating the  game grid
  function createGrid(lipstickStartPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell) //pushing element(that the let loop creates) into empty array
    }
    isolateHomeRow() 
    createRiver()
    createRoad()
  }

  function isolateHomeRow () {
    const homeRow = cells.slice(0, 10)
    homeRow.forEach(row => {
      row.classList.add('topRow')
    })
  }

  function createRoad () {
    const road = cells.slice(50, 80)
    road.forEach(row => {
      row.classList.add('roadGrey')
    })
  }

  function createRiver() {
    const river = cells.slice(10, 40)
    river.forEach(row => {
      row.classList.add('riverBlue')
    })
  }
  





  //button starts the game
  function startGame() {
    //console.log('game has comenced', startGame)
    addLipstick(lipstickStartPosition)
    
    //adding the lips into the game
    cells[1].classList.add('lipsHome')
    cells[4].classList.add('lipsHome')
    cells[8].classList.add('lipsHome')
    
    //adding hand to the game 
    //cells[11].classList.add('hand')
    cells[15].classList.add('hand')
    //cells[19].classList.add('hand')
    //cells[21].classList.add('hand')
    //cells[24].classList.add('hand')
    //cells[28].classList.add('hand')
    //cells[30].classList.add('hand')
    //cells[33].classList.add('hand')
    //cells[36].classList.add('hand')
    
    let handCurrentPosition = 15
    /*
    setInterval(() => {
      //console.log(handInterval)
      river.forEach((cell, index) => { 
        if (cell.className === 'hand') {
          cell.classList.remove('hand')
          handCurrentPosition -= 1
          cell[handCurrentPosition].classList.add('hand')
          console.log(handCurrentPosition)
        }
        if (handCurrentPosition === 0) {
          handCurrentPosition + width
        }
        
      })
    }, 1000)
    */

    
    const river = cells.slice(10, 40)

    const handTimer = setInterval(() => {
      let handCurrentPosition = 15
      river.forEach((cell, i) => {
        if (cell.className === 'riverBlue hand') {
          cell.classList.remove('hand')
          handCurrentPosition = i - 1
          river[handCurrentPosition].classList.add('hand')
        }
      })
      if (handCurrentPosition === 0) {
        handCurrentPosition = width
      }
    }, 1000)
    


    //adding lipstick lid to game 
    //cells[50].classList.add('lipstickLid')
    //cells[53].classList.add('lipstickLid')
    //cells[56].classList.add('lipstickLid')
    //cells[61].classList.add('lipstickLid')
    //cells[65].classList.add('lipstickLid')
    cells[68].classList.add('lipstickLid')
    //cells[72].classList.add('lipstickLid')
    //cells[74].classList.add('lipstickLid')
    //cells[79].classList.add('lipstickLid')

    const road = cells.slice(50, 80)
    
    const lidTimer = setInterval(() => {
      let lipstickLidCurrentPosition = 68
      road.forEach((cell, i) => {
        if (cell.className === 'roadGrey lipstickLid') {
          cell.classList.remove('lipstickLid')
          lipstickLidCurrentPosition = i - 1
          road[lipstickLidCurrentPosition].classList.add('lipstickLid')
        }
      })
      if (lipstickLidCurrentPosition === 0) {
        lipstickLidCurrentPosition = width
      }
    }, 1000)
    
    
    
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

  
    if (cells[lipstickCurrentPosition].classList.contains('riverBlue') || cells[lipstickCurrentPosition].classList.contains('lipstickLid')) {
      console.log('oops')
      livesRemaining -- 
      livesDisplay.innerHTML = livesRemaining
    }
    
    if (livesRemaining <= 0) {
      alert(`Opps! All out of lives.. but you scored ${score}`)
    }

    addLipstick(lipstickCurrentPosition)

    
    
  }


  document.addEventListener('keyup', handleKeyUp)

  startButton.addEventListener('click', startGame)
  createGrid(lipstickStartPosition)

}


window.addEventListener('DOMContentLoaded', init)


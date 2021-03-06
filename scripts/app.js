function init() {

  const startButton = document.getElementById('start')
  const grid = document.querySelector('.grid')

  //scores & level
  const scoreDisplay = document.querySelector('#score-display')
  const livesDisplay = document.querySelector('#lives-display')
  const levelDisplay = document.querySelector('#level-display')
  const highScoreDisplay = document.querySelector('#high-score-display')



  let score = 0
  let highScore = 0
  let livesRemaining = 3
  let currentLevel = 1


  const width = 10
  const cellCount = width * width
  const cells = []

  const lipstickClass = 'lipstick'
  const lipstickStartPosition = 95
  let lipstickCurrentPosition = 95


  //! creating the  game grid
  function createGrid(lipstickStartPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      //cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    isolateHomeRow()
    createRiver()
    createRoad()
    addGrassOne()
    addGrassTwo()
    firstRow()

  }

  function isolateHomeRow() {
    const homeRow = cells.slice(0, 10)
    homeRow.forEach(row => {
      row.classList.add('topRow')
    })
  }

  function createRoad() {
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

  function addGrassOne() {
    const grassPatch = cells.slice(40, 50)
    grassPatch.forEach(row => {
      row.classList.add('firstRows')
    })
  }

  function addGrassTwo() {
    const ladybird = cells.slice(80, 90)
    ladybird.forEach(row => {
      row.classList.add('firstRows')
    })
  }

  function firstRow() {
    const firstRowColour = cells.slice(90, 100)
    firstRowColour.forEach(row => {
      row.classList.add('firstRows')
    })
  }




  //!button starts the game
  function startGame() {
    addLipstick(lipstickStartPosition)

    //adding the lips into the game
    cells[1].classList.add('lipsHome')
    cells[4].classList.add('lipsHome')
    cells[8].classList.add('lipsHome')


    const river = cells.slice(10, 40)

    let hands = [11, 12, 13, 15, 19, 21, 24, 28, 29, 30, 33]

    const handTimer = setInterval(() => {
      river.forEach((cell, i) => {
        cell.classList.remove('hand')
      })
      hands = hands.map((index) => {
        if (index === 10) {
          return 39
        } else {
          return index - 1
        }
      })
      hands.forEach((index) => {
        cells[index].classList.add('hand')
      })


    }, 1000)


    const road = cells.slice(50, 80)

    let lids = [51, 53, 56, 61, 65, 68, 72, 74, 79]

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



  }



  //*add lipstick to grid 
  function addLipstick(position) {
    cells[position].classList.add(lipstickClass)
  }

  //* remove lipstick from grid 
  function removeLipstick(position) {
    cells[position].classList.remove(lipstickClass)
  }

  //!lipstick/player movement 
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

    // * remove a home if level 3 
    if (currentLevel >= 3) {
      cells[4].classList.remove('lipsHome')
      if (lipstickCurrentPosition === 4) {
        alert('Oops!')
        livesRemaining--
        livesDisplay.innerHTML = livesRemaining
        lipstickCurrentPosition = lipstickStartPosition
      }
    }

    if (currentLevel >= 4) {
      cells[1].classList.remove('lipsHome')
      if (lipstickCurrentPosition === 1) {
        alert('Oops!')
        livesRemaining--
        livesDisplay.innerHTML = livesRemaining
        lipstickCurrentPosition = lipstickStartPosition
      }
    }

    if (currentLevel === 5) {
      alert(`GAME OVER!! You have defeated Lipper with a score of ${score}`)
    }

    if (lipstickCurrentPosition === 1 || lipstickCurrentPosition === 4 || lipstickCurrentPosition === 8) {
      window.alert('You Won!!')
      currentLevel += 1
      levelDisplay.innerHTML = currentLevel
      lipstickCurrentPosition = lipstickStartPosition
    }

    // * make level 2 + harder 
    if (currentLevel >= 2) {
      if (lipstickCurrentPosition === 0 || lipstickCurrentPosition === 2 || lipstickCurrentPosition === 3 || lipstickCurrentPosition === 5 || lipstickCurrentPosition === 6 || lipstickCurrentPosition === 7 || lipstickCurrentPosition === 9) {
        alert('Oppsie, you cant do that anymore!')
        livesRemaining--
        livesDisplay.innerHTML = livesRemaining
        lipstickCurrentPosition = lipstickStartPosition
      }
    }




    if (cells[lipstickCurrentPosition].classList.contains('hand')) {
      livesRemaining * 1
    } else if (cells[lipstickCurrentPosition].classList.contains('lipstickLid')) {
      console.log('oops')
      livesRemaining--
      livesDisplay.innerHTML = livesRemaining
      lipstickCurrentPosition = lipstickStartPosition
    } else if (cells[lipstickCurrentPosition].classList.contains('riverBlue')) {
      cells[lipstickCurrentPosition].classList.remove('riverBlue')
      cells[lipstickCurrentPosition].classList.add('splash')
      livesRemaining--
      livesDisplay.innerHTML = livesRemaining
      lipstickCurrentPosition = lipstickStartPosition
    } else if (cells[lipstickCurrentPosition].classList.contains('splash')) {
      livesRemaining = 0
      livesDisplay.innerHTML = livesRemaining
      alert('smh.. how are you gonna fall into the same trap')
    }


    if (livesRemaining <= 0) {
      alert(`Opps! All out of lives... you scored ${score}`)
      lipstickCurrentPosition = lipstickStartPosition
      score = 0
      scoreDisplay.innerHTML = score
      livesRemaining = 3
      livesDisplay.innerHTML = livesRemaining
    }

    addLipstick(lipstickCurrentPosition)

    const highScore = localStorage.getItem('highScore')

    if (highScore !== null) {
      if (score > highScore) {
        localStorage.setItem('highScore', score)
      }
    } else {
      localStorage.setItem('highScore', score)
    }
    highScoreDisplay.innerHTML = highScore

  }


  document.addEventListener('keyup', handleKeyUp)

  startButton.addEventListener('click', startGame)
  createGrid(lipstickStartPosition)

}


window.addEventListener('DOMContentLoaded', init)


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
  }


  
  


  const width = 10
  const cellCount = width * width 
  const cells = []

  const lipstickClass = 'lipstick'
  const lipstickStartPosition = 95
  let lipstickCurrentPosition = 95
  let lipstickLidCurrentPosition = null

  let lidTimer 
  let counter = 0


  // creating the  game grid
  
  function createGrid(lipstickStartPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell) //pushing element(that the let loop creates) into empty array
    }

    //adding the lips into the game
    cells[1].classList.add('lipsHome')
    cells[4].classList.add('lipsHome')
    cells[8].classList.add('lipsHome')

    //adding hand to the game 
    cells[23].classList.add('hand')

    //adding lipstick lid to the game 
    cells[50].classList.add('lipstickLid')

    //if player lands on a div containing both classes, user looses 
    //if (cells.target.classList.contains('lipstickLid') && cells.target.classList.contains('lipstick')) {
    //  console.log('interception!')
    //}
    
    /*
    lidTimer = setInterval(() => {
      counter ++
      if (counter === 2){
        cells[50].classList.remove('lipstickLid')
      }
      clearInterval(lidTimer)
      cells[51].classList.add('lipstickLid')
      lidTimer = setInterval(() => {
        if (counter === 2){
          cells[51].classList.remove('lipstickLid')
        }
      }) 
      //return
      
    }, 1500)
    */
    addLipstick(lipstickStartPosition)
    
  }
  /*
  for (let i = 50; i < cells.length - 40; i++) {
    cells[i].classList.add('lipstickLid')
  } 
  */



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
    //if (cells[50].classList.contains('lipstickLid') && cells[50].classList.contains('lipsitck')) {
      console.log('interception!')
    }
  }
  


  gridWrapper.addEventListener('keyup', handleInterception)

  document.addEventListener('keyup', handleKeyUp)

  startButton.addEventListener('click', startGame)
  createGrid(lipstickStartPosition)

}


window.addEventListener('DOMContentLoaded', init)



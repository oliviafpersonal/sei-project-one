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
  let lipstickCurrentPosition = 0


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













  startButton.addEventListener('click', startGame)
  createGrid(lipstickStartPosition)

}


window.addEventListener('DOMContentLoaded', init)
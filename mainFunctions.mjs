import {
  randomArrEl,
  convertCoordsToId,
  addCoords,
} from "./helperFunctions.mjs"

const createGrid = (rows, columns) => {
  numOfColumns = columns
  numOfRows = rows
  numOfCells = numOfColumns * numOfRows
  for (let i = 0; i < numOfCells; i++) {
    cells.push(new Cell(i))
  }

  $field.style.grid = `repeat(${numOfRows}, 50px) / repeat(${numOfColumns}, 50px)`
  let gridHTML = ""
  for (let i = 0; i < numOfCells; i++) {
    gridHTML += `<div class="cell"></div>`
  }
  $field.innerHTML += gridHTML
}

const drawBoard = () => {
  const draw = (color, i, j) =>
    ($field.children.item(i * numOfColumns + j).style.backgroundColor = color)

  for (let i = 0; i < numOfRows; i++) {
    for (let j = 0; j < numOfColumns; j++) {
      if (cells[i * numOfColumns + j].isSnake) draw("white", i, j)
      else if (cells[i * numOfColumns + j].isFruit) draw("red", i, j)
      else if ((j + i) % 2 === 1) draw("rgb(0, 141, 12)", i, j)
      else draw("rgb(0, 117, 10)", i, j)
    }
  }
}

const drawFruit = () => {
  if (numOfFruitsOnMap < $fruitCount.value) {
    let emptyCells = cells.filter(el => el.isSnake === false)
    cells[randomArrEl(emptyCells).id].isFruit = true
    numOfFruitsOnMap++
  }
}

const initializeSnake = () => {
  for (let i = 0; i < 3; i++) {
    snake.bodyPos.push(addCoords(snakeStartPos, [-i, 0]))
    cells[convertCoordsToId(snake.bodyPos[i])].isSnake = true
  }
}

const checkIfEating = () => {
  if (cells[convertCoordsToId(snake.bodyPos[0])].isFruit) {
    snake.hasEaten = true
    cells[convertCoordsToId(snake.bodyPos[0])].isFruit = false
    numOfFruitsOnMap--
  }
}

const moveSnake = () => {
  snake.direction = newDirection
  switch (snake.direction) {
    //changing x pos
    case "right":
      updateSnakeBodyPos([1, 0])
      break
    case "left":
      updateSnakeBodyPos([-1, 0])
      break
    //changing y pos
    case "up":
      updateSnakeBodyPos([0, -1])
      break
    case "down":
      updateSnakeBodyPos([0, 1])
      break
  }
}

const updateSnakeBodyPos = movement => {
  const newHeadPos = addCoords(snake.bodyPos[0], movement)
  snake.hasEaten
    ? (snake.hasEaten = false)
    : (cells[convertCoordsToId(snake.bodyPos.pop())].isSnake = false)

  //check collision with walls
  if (
    newHeadPos[0] < 0 ||
    newHeadPos[1] < 0 ||
    newHeadPos[0] > numOfColumns - 1 ||
    newHeadPos[1] > numOfRows - 1
  ) {
    hasLost = true
    console.log("you collided with a wall")
    return
  }

  //check collision with itself
  if (snake.bodyPos.find(pos => String(pos) === String(newHeadPos))) {
    hasLost = true
    console.log("you collided with yourself")
    return
  }

  //add a new snake element
  snake.bodyPos.unshift(newHeadPos)

  cells[convertCoordsToId(snake.bodyPos[0])].isSnake = true
}

const updateDirection = direction => (newDirection = direction)

const startGame = () => {
  initializeSnake()
  for (let i = 0; i < $fruitCount.value; i++) drawFruit()
  drawBoard()
  gameTick = setInterval(step, (20 - $snakeSpeed.value) * 20)
  document.querySelector("body").classList = ""
}

const step = () => {
  if (!hasLost) {
    moveSnake()
    checkIfEating()
    drawFruit()
    drawBoard()
  }
  if (hasLost) clearInterval()
}

const initializeGame = () => {
  document.querySelector(`.start-UI`).style.display = "none"
  $field.style.display = "grid"
  createGrid($mapCoords[0].value, $mapCoords[1].value)
  startGame()
}

export {
  createGrid,
  drawBoard,
  drawFruit,
  initializeSnake,
  checkIfEating,
  moveSnake,
  updateSnakeBodyPos,
  updateDirection,
  startGame,
  initializeGame,
}

const snakeStartPos = [3, 2]

const $field = document.querySelector(".field")

const $startButton = document.querySelector(`.start-button`)

const $mapSizes = document.querySelector(`.sizes`).getElementsByTagName("div")
const $mapCoords = document.querySelectorAll(".map-size")

const $snakeSpeeds = document
  .querySelector(`.snake-speed`)
  .getElementsByTagName("div")
const $snakeSpeed = document.querySelector(".snake-speed").lastElementChild

const $fruitCounts = document
  .querySelector(`.fruit-count`)
  .getElementsByTagName("div")
const $fruitCount = document.querySelector(".fruit-count").lastElementChild

let gameTick
let newDirection = "right"
let cells = []
let numOfColumns, numOfRows, numOfCells
let numOfFruitsOnMap = 0
let hasLost = false

class Cell {
  constructor(id) {
    this.id = id
  }
  isSnake = false
  isFruit = false
}

const snake = {
  direction: "right",
  bodyPos: [],
  hasEaten: false,
}
/ const $mapSmall = document
//   .querySelector(`.sizes`)
//   .getElementsByTagName("div")[0]
// const $mapMedium = document
//   .querySelector(`.sizes`)
//   .getElementsByTagName("div")[1]
// const $mapLarge = document
//   .querySelector(`.sizes`)
//   .getElementsByTagName("div")[2]
// const $mapCustom = document
//   .querySelector(`.custom-size`)
//   .getElementsByTagName("input")[0]

// const $speedSlow = document
//   .querySelector(`.snake-speed`)
//   .getElementsByTagName("div")[0]
// const $speedMedium = document
//   .querySelector(`.snake-speed`)
//   .getElementsByTagName("div")[1]
// const $speedFast = document
//   .querySelector(`.snake-speed`)
//   .getElementsByTagName("div")[2]
// const $speedCustom = document
//   .querySelector(`.snake-speed`)
//   .getElementsByTagName("div")[3]
//   .getElementsByTagName("input")[0]

// const $fruitSingle = document
//   .querySelector(`.fruit-count`)
//   .getElementsByTagName("div")[0]
// const $fruitFew = document
//   .querySelector(`.fruit-count`)
//   .getElementsByTagName("div")[1]
// const $fruitMany = document
//   .querySelector(`.fruit-count`)
//   .getElementsByTagName("div")[2]
// const $fruitCustom = document
//   .querySelector(`.fruit-count`)
//   .getElementsByTagName("div")[3]
//   .getElementsByTagName("input")[0]

// const $modeNormal = document
//   .querySelector(`.game-mode`)
//   .getElementsByTagName("div")[0]

// const $snakeColorWhite = document
//   .querySelector(`.snake-color`)
//   .getElementsByTagName("div")[0]
// const $snakeColorRed = document
//   .querySelector(`.snake-color`)
//   .getElementsByTagName("div")[1]
// const $snakeColorBlue = document
//   .querySelector(`.snake-color`)
//   .getElementsByTagName("div")[2]
// const $snakeColorCustom = document
//   .querySelector(`.snake-color`)
//   .getElementsByTagName("div")[3]
//   .getElementsByTagName("input")[0]

// const $fruitColorRed = document
//   .querySelector(`.fruit-color`)
//   .getElementsByTagName("div")[0]
// const $fruitColorBlue = document
//   .querySelector(`.fruit-color`)
//   .getElementsByTagName("div")[1]
// const $fruitColorYellow = document
//   .querySelector(`.fruit-color`)
//   .getElementsByTagName("div")[2]
// const $fruitColorCustom = document
//   .querySelector(`.fruit-color`)
//   .getElementsByTagName("div")[3]
//   .getElementsByTagName("input")[0]

// const $mapColorRed = document
//   .querySelector(`.map-color`)
//   .getElementsByTagName("div")[0]
// const $mapColorBlue = document
//   .querySelector(`.map-color`)
//   .getElementsByTagName("div")[1]
// const $mapColorYellow = document
//   .querySelector(`.map-color`)
//   .getElementsByTagName("div")[2]
// const $mapColorCustom = document
//   .querySelector(`.map-color`)
//   .getElementsByTagName("div")[3]
//   .getElementsByTagName("input")[0]

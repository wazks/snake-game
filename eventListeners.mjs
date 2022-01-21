import { updateDirection, initializeGame } from "./mainFunctions.mjs"

document.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowRight":
      if (snake.direction !== "left") updateDirection("right")
      break
    case "ArrowLeft":
      if (snake.direction !== "right") updateDirection("left")
      break
    case "ArrowUp":
      if (snake.direction !== "down") updateDirection("up")
      break
    case "ArrowDown":
      if (snake.direction !== "up") updateDirection("down")
      break
  }
})

const changeActive = (array, i) => {
  Array.from(array).forEach(option => {
    option.classList = ""
  })
  array[i].classList = "active"
}

for (let i = 0; i < 3; i++) {
  $mapSizes[i].addEventListener("click", () => {
    $mapCoords[0].value = 4 + (i + 1) * 2
    $mapCoords[1].value = 3 + (i + 1) * 4
    changeActive($mapSizes, i)
  })
  $snakeSpeeds[i].addEventListener("click", () => {
    $snakeSpeed.value = (i + 1) * 5
    changeActive($snakeSpeeds, i)
  })
  $fruitCounts[i].addEventListener("click", () => {
    $fruitCount.value = 1 + i * 2
    changeActive($fruitCounts, i)
  })
}

$snakeSpeed.addEventListener("click", () => changeActive($snakeSpeeds, 3))
$fruitCount.addEventListener("click", () => changeActive($fruitCounts, 3))
$mapCoords[0].addEventListener("click", () => changeActive($mapSizes, 3))
$mapCoords[1].addEventListener("click", () => changeActive($mapSizes, 3))
$startButton.addEventListener("click", () => initializeGame())

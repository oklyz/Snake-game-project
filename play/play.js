//// variables that I used to make snake game
const container = document.querySelector(".container")
const rows = 14
const columns = 14
const totalRowsColumns = rows * columns
const totalboxes = []
let snake = [0, 1, 2]
let intrevalId
let food = Math.floor(Math.random() * totalRowsColumns)
let gameIsRunning = true
let scorePlayer = 0
let sco = 1
let speed = 200
const bestScore = []
const score = document.querySelector("#score")
const button = document.querySelector("button")
const heighestScore = document.querySelector("#score2")
//// creating cells for board game
for (let i = 0; i < rows * columns; i++) {
  const newEl = document.createElement("div")
  newEl.setAttribute("class", "boxes")
  container.append(newEl)
}
const body = document.querySelector("body")

//// make a new array that are equal to boxes length to fillter them after
const boxes = document.querySelectorAll(".boxes")

let i = 0
boxes.forEach(() => {
  totalboxes.push(i)
  i += 1
})
//// make cheackboard algorithm as a filter
const blackFilter = totalboxes.filter((nums) => {
  const row = Math.floor(nums / columns)
  const col = nums % columns
  return (row + col) % 2 === 0
})

const whiteFilter = totalboxes.filter((nums) => {
  const row = Math.floor(nums / columns)
  const col = nums % columns
  return (row + col) % 2 !== 0
})
//// function that control the whole game
const initializeGame = () => {
  foodFun()
  clearIntervalMove()
  if (gameIsRunning) {
    moveSnake()
  }
}
//// function that spawn food and check if the head is equal to food as a result it increase snake lenght and score
const foodFun = () => {
  boxes[food].style.backgroundColor = "red"
  const head = snake[snake.length - 1]

  if (head === food) {
    food = Math.floor(Math.random() * totalRowsColumns)
    boxes[food].style.backgroundColor = "red"

    scorePlayer++
    const increase = sco++

    bestScore.push(increase)
    heighestScore.innerText = Math.max(...bestScore, 0)
    score.innerText = scorePlayer

    snake.unshift(snake[0])
  }
}
//// function that gives snake ability to change there direction
const changeDirection = (direction, key) => {
  document.addEventListener("keypress", (event) => {
    if (!gameIsRunning) return
    if (event.keyCode === key) {
      const newhead = snake[snake.length - 1] + direction
      const prevHead = snake[snake.length - 2]
      if (newhead !== prevHead) {
        intrevalId = setInterval(() => {
          const tail = snake.shift()
          snake.push(snake[snake.length - 1] + direction)
          if (blackFilter.includes(tail)) {
            boxes[tail].style.backgroundColor = blackFilterColor
          } else {
            boxes[tail].style.backgroundColor = whiteFilterColor
          }
          checkDifficalty()
          foodFun()
          endGame()
          if (gameIsRunning) {
            drawSnake()
          }
        }, speed)
      }
    }
  })
}
//// function that control snake movement
const moveSnake = () => {
  const directionRight = 1 //D = 100
  const directionDown = 14 //S = 115
  const directionUp = -14 //W = 119
  const directionLeft = -1 // A = 97

  const keyButton = [
    { key: 97, direction: directionLeft },
    { key: 119, direction: directionUp },
    { key: 115, direction: directionDown },
    { key: 100, direction: directionRight },
  ]
  keyButton.forEach((num) => {
    const dire = num.direction
    const key = num.key
    changeDirection(dire, key)
  })
}
//// function that clear previous action
const clearIntervalMove = () => {
  document.addEventListener("keypress", (event) => {
    const head = snake[snake.length - 1]
    const directionRight = head + 1 //D = 100
    const directionDown = head + 14 //S = 115
    const directionUp = head - 14 //W = 119
    const directionLeft = head - 1 // A = 97

    const secondPart = snake[snake.length - 2]

    if (event.keyCode === 100 && directionRight !== secondPart) {
      clearInterval(intrevalId)
    } else if (event.keyCode === 119 && directionUp !== secondPart) {
      clearInterval(intrevalId)
    } else if (event.keyCode === 97 && directionLeft !== secondPart) {
      clearInterval(intrevalId)
    } else if (event.keyCode === 115 && directionDown !== secondPart) {
      clearInterval(intrevalId)
    }
  })
}
//// function that check if any length of snake are duplicated excepet the first index
const mode = (arr) => {
  const count = {}
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i]
    if (count[num]) {
      return true
    }
    count[num] = 1
  }
  return false
}
//// function that handle end game logic
const endGame = () => {
  const head = snake[snake.length - 1]
  const tail = snake[0]
  if (mode(snake)) {
    clearInterval(intrevalId)
    gameIsRunning = false
    return
  } else if (head === tail) {
    clearInterval(intrevalId)
    gameIsRunning = false
    return
  }
  if (head < 0 || head >= totalRowsColumns) {
    clearInterval(intrevalId)
    gameIsRunning = false
    return
  }
  const prevHead = snake[snake.length - 2]
  if (prevHead !== undefined) {
    const prevRow = Math.floor(prevHead / columns)
    const newRow = Math.floor(head / columns)
    const rowChanged = prevRow !== newRow

    const colDiff = Math.abs(head - prevHead)
    const movedHorizontally = colDiff === 1

    if (movedHorizontally && rowChanged) {
      clearInterval(intrevalId)
      gameIsRunning = false
      return
    }
  }
}
//// function to reset the game
const reset = () => {
  clearInterval(intrevalId)
  speed = 200
  gameIsRunning = true
  scorePlayer = 0
  sco = 1
  snake = [0, 1, 2]
  blackFilter.forEach((nums) => {
    boxes[nums].style.backgroundColor = blackFilterColor
  })
  whiteFilter.forEach((nums) => {
    boxes[nums].style.backgroundColor = whiteFilterColor
  })
  score.innerText = scorePlayer
  drawSnake()
  foodFun()
  initializeGame()
}
//// function to increase speed incrementally
const increaseSpeed = () => {
  if (scorePlayer === 10) {
    speed = 200
  } else if (scorePlayer === 20) {
    speed = 150
  } else if (scorePlayer === 30) {
    speed = 100
  }
}
initializeGame()
//// button to reset the game
button.addEventListener("click", reset)

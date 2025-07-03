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

const score = document.querySelector("#score")

//// creating cells for board game
for (let i = 0; i < rows * columns; i++) {
  const newEl = document.createElement("div")
  newEl.setAttribute("class", "boxes")
  container.append(newEl)
}

//// make a new array that are equal to boxes length to fillter them after
const boxes = document.querySelectorAll(".boxes")

let i = 0
boxes.forEach(() => {
  totalboxes.push(i)
  i += 1
})

const blackFilter = totalboxes.filter((nums) => {
  const row = Math.floor(nums / columns)
  const col = nums % columns
  return (row + col) % 2 === 0
})

blackFilter.forEach((nums) => {
  boxes[nums].style.backgroundColor = "black"
})

const whiteFilter = totalboxes.filter((nums) => {
  const row = Math.floor(nums / columns)
  const col = nums % columns
  return (row + col) % 2 !== 0
})

whiteFilter.forEach((nums) => {
  boxes[nums].style.backgroundColor = "white"
})

const initializeGame = () => {
  drawSnake()
  foodFun()
  if (gameIsRunning) {
    clearIntervalMove()
    moveSnake()
  }
  console.log(food)
}
const drawSnake = () => {
  snake.forEach((nums) => {
    boxes[nums].style.backgroundColor = "yellow"
  })
}

// drawSnake()

const foodFun = () => {
  boxes[food].style.backgroundColor = "red"
  const head = snake[snake.length - 1]
  if (head === food) {
    food = Math.floor(Math.random() * totalRowsColumns)
    boxes[food].style.backgroundColor = "red"
    scorePlayer++
    score.innerText = scorePlayer
    if (snake[0] - 1 !== snake[1]) {
      snake.unshift(snake[0] - 1)
    } else if (snake[0] + 1 !== snake[1]) {
      snake.unshift(snake[0] + 1)
    }
  }
}

// foodFun()

const changeDirection = (direction, key) => {
  document.addEventListener("keypress", (event) => {
    if (event.keyCode === key) {
      const head = snake[snake.length - 1] + direction

      const secondPart = snake[snake.length - 2]
      if (head !== secondPart) {
        intrevalId = setInterval(() => {
          const tail = snake.shift()
          snake.push(snake[snake.length - 1] + direction)
          // console.log(snake)
          if (blackFilter.includes(tail)) {
            boxes[tail].style.backgroundColor = "black"
          } else {
            boxes[tail].style.backgroundColor = "white"
          }
          foodFun()
          // console.log(`this is food :${food}`)

          // console.log(`this is a food: ${food}`)
          // console.log(`this is a head of snake: ${snake[snake.length - 1]}`)

          drawSnake()
          // console.log(`this is interval id: ${intrevalId}`)
          endGame()
          // console.log(`this is a ${mode(snake)}`)
        }, 150)
      }
    }
  })
}

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

const clearIntervalMove = () => {
  document.addEventListener("keypress", (event) => {
    const directionRight = snake[snake.length - 1] + 1 //D = 100
    const directionDown = snake[snake.length - 1] + 14 //S = 115
    const directionUp = snake[snake.length - 1] - 14 //W = 119
    const directionLeft = snake[snake.length - 1] - 1 // A = 97

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

const mode = (arr) => {
  const count = {}
  for (let num of arr) {
    if (count[num]) {
      return true
    }
    count[num] = 1
  }
  return false
}

// const arr = [0, 0, 1, 2, 3, 4, 5, 6, 7]
// console.log(mode(arr))

const endGame = () => {
  if (mode(snake)) {
    console.log(alert("Game Over: Snake bit itself!"))
    clearInterval(intrevalId)
    gameIsRunning = false
  } else if (snake[snake.length - 1] < 0 || snake[snake.length - 1] > 196) {
    console.log(alert("Game over: Snake out of board!"))
    clearInterval(intrevalId)
    gameIsRunning = false
  }
}

initializeGame()
// console.log(snake[snake.length - 1] + 1)
// console.log(snake)

// button[0].addEventListener('click', () => {
//   const cannotTurnRight = snake[snake.length - 1] + 1
//   if (cannotTurnRight !== snake[snake.length - 2]) {
//     const shift = snake.shift()
//     snake.push(snake[snake.length - 1] + 1)
//     if (blackFilter.includes(shift)) {
//       boxes[shift].style.backgroundColor = 'black'
//     } else {
//       boxes[shift].style.backgroundColor = 'white'
//     }
//     drawSnake()
//   }
// })
// button[1].addEventListener('click', () => {
//   const cannotTurnleft = snake[snake.length - 1] - 1
//   if (cannotTurnleft !== snake[snake.length - 2]) {
//     const shift = snake.shift()
//     snake.push(snake[snake.length - 1] - 1)

//     if (blackFilter.includes(shift)) {
//       boxes[shift].style.backgroundColor = 'black'
//     } else {
//       boxes[shift].style.backgroundColor = 'white'
//     }
//   }
//   drawSnake()
// })
// button[2].addEventListener('click', () => {
//   const cannotTurnDown = snake[snake.length - 1] + 14
//   if (cannotTurnDown !== snake[snake.length - 2]) {
//     const shift = snake.shift()
//     snake.push(snake[snake.length - 1] + 14)
//     if (blackFilter.includes(shift)) {
//       boxes[shift].style.backgroundColor = 'black'
//     } else {
//       boxes[shift].style.backgroundColor = 'white'
//     }
//     drawSnake()
//   }
// })
// button[3].addEventListener('click', () => {
//   const cannotTurnUp = snake[snake.length - 1] - 14
//   if (cannotTurnUp !== snake[snake.length - 2]) {
//     const shift = snake.shift()
//     snake.push(snake[snake.length - 1] - 14)
//     if (blackFilter.includes(shift)) {
//       boxes[shift].style.backgroundColor = 'black'
//     } else {
//       boxes[shift].style.backgroundColor = 'white'
//     }
//     drawSnake()
//   }
// })

// document.addEventListener('keypress', (event) => {
//   console.log('key code: ', event.keyCode)
// })
// snake.shift()
// snake.push(snake[snake.length] + 1)

// console.log(snake[snake.length] + 1)

// console.log(KeyboardEvent.key)

// const directionRight = 1 //D = 100
// const directionDown = 14 //S = 115
// const directionUp = -14 //W = 119
// const directionLeft = -1 // A = 97

// const keyButton = [
//   { key: 97, direction: directionLeft },
//   { key: 119, direction: directionUp },
//   { key: 115, direction: directionDown },
//   { key: 100, direction: directionRight },
// ]

// console.log(keyButton[0].key)

// const generateRandomFood = () => {
//   button.addEventListener("click", () => {
//     food = [Math.floor(Math.random() * totalRowsColumns)]
//     boxes[food].style.backgroundColor = "red"
//     console.log(food)
//   })
// }
// generateRandomFood()

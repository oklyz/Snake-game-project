const container = document.querySelector(".container")
const rows = 14
const columns = 14
const totalRowsColumns = rows * columns
const totalboxes = []
let snake = [0, 1, 2, 3]
let intrevalId

const button = document.querySelectorAll("button")
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
  clearIntervalMove()
  moveSnake()
}

const drawSnake = () => {
  snake.forEach((nums) => {
    boxes[nums].style.backgroundColor = "yellow"
  })
}

// drawSnake()

const foodFun = () => {
  let food = [Math.floor(Math.random() * totalRowsColumns)]
  boxes[food].style.backgroundColor = "red"
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
          console.log(snake)
          if (blackFilter.includes(tail)) {
            boxes[tail].style.backgroundColor = "black"
          } else {
            boxes[tail].style.backgroundColor = "white"
          }
          drawSnake()
          console.log(`this is interval id: ${intrevalId}`)
        }, 1000)
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
    if (event.keyCode === 100) {
      clearInterval(intrevalId)
    } else if (event.keyCode === 119) {
      clearInterval(intrevalId)
    } else if (event.keyCode === 97) {
      clearInterval(intrevalId)
    } else if (event.keyCode === 115) {
      clearInterval(intrevalId)
    }
  })
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

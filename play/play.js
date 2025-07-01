const container = document.querySelector('.container')
const rows = 14
const columns = 14
const totalRowsColumns = rows * columns
const totalboxes = []
let snake = [0, 1, 2, 3]

const button = document.querySelectorAll('button')
//// creating cells for board game
for (let i = 0; i < rows * columns; i++) {
  const newEl = document.createElement('div')
  newEl.setAttribute('class', 'boxes')
  container.append(newEl)
}

//// make a new array that are equal to boxes length to fillter them after
const boxes = document.querySelectorAll('.boxes')

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
  boxes[nums].style.backgroundColor = 'black'
})

const whiteFilter = totalboxes.filter((nums) => {
  const row = Math.floor(nums / columns)
  const col = nums % columns
  return (row + col) % 2 !== 0
})

whiteFilter.forEach((nums) => {
  boxes[nums].style.backgroundColor = 'white'
})

const initializeGame = () => {
  drawSnake()

  foodFun()
}

const drawSnake = () => {
  snake.forEach((nums) => {
    boxes[nums].style.backgroundColor = 'yellow'
  })
}

drawSnake()
const foodFun = () => {
  let food = [Math.floor(Math.random() * totalRowsColumns)]
  boxes[food].style.backgroundColor = 'red'
}

foodFun()

const moveSnake = () => {
  const directionRight = 1
  const directionDown = 14
  const directionUp = 14
  const directionLeft = -1

  document.addEventListener('keypress', (event) => {
    // W = 119
    setTimeout(() => {
      if (event.keyCode === 119) {
        const cannotTurnDown = snake[snake.length - 1] - directionUp
        if (cannotTurnDown !== snake[snake.length - 2]) {
          const shift = snake.shift()
          snake.push(snake[snake.length - 1] - directionUp)
          if (blackFilter.includes(shift)) {
            boxes[shift].style.backgroundColor = 'black'
          } else {
            boxes[shift].style.backgroundColor = 'white'
          }
          drawSnake()
        }
        // D = 100
      } else if (event.keyCode === 100) {
        const cannotTurnLeft = snake[snake.length - 1] + directionRight
        if (cannotTurnLeft !== snake[snake.length - 2]) {
          const shift = snake.shift()
          snake.push(snake[snake.length - 1] + directionRight)
          if (blackFilter.includes(shift)) {
            boxes[shift].style.backgroundColor = 'black'
          } else {
            boxes[shift].style.backgroundColor = 'white'
          }
          drawSnake()
          // S = 115
        } else if (event.keyCode === 115) {
          const cannotTurnUp = snake[snake.length - 1] + directionDown
          if (cannotTurnUp !== snake[snake.length - 2]) {
            const shift = snake.shift()
            snake.push(snake[snake.length - 1] + directionDown)
            if (blackFilter.includes(shift)) {
              boxes[shift].style.backgroundColor = 'black'
            } else {
              boxes[shift].style.backgroundColor = 'white'
            }
            drawSnake()
          }
          // 97 = A
        } else if (event.keyCode === 97) {
          const cannotTurnRight = snake[snake.length - 1] - directionLeft
          if (cannotTurnRight !== snake[snake.length - 2]) {
            const shift = snake.shift()
            snake.push(snake[snake.length - 1] - directionLeft)

            if (blackFilter.includes(shift)) {
              boxes[shift].style.backgroundColor = 'black'
            } else {
              boxes[shift].style.backgroundColor = 'white'
            }
            drawSnake()
          }
        }
      }
    }, 500)
  })
}
moveSnake()

const checkDirection = () => {}
// moveSnake()
console.log(snake[snake.length - 1] + 1)
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

console.log(KeyboardEvent.key)

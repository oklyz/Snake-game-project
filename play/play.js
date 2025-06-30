const container = document.querySelector('.container')
const rows = 14
const columns = 14
const totalRowsColumns = rows * columns
const totalboxes = []
let snake = [0, 1, 2]

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

// const initializeGame = () => {
//   while(true) {}
//   drawSnake()
//   moveSnake()
// }

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
  const directionUp = -14
  const directionLeft = -1
  if (button === directionRight) {
    snake.shift()
    snake.push(snake[snake.length - 1] + directionRight)
  } else if (button === directionLeft) {
    snake.shift()
    snake.push(snake[snake.length - 1] + directionLeft)
  } else if (button === directionUp) {
    snake.shift()
    snake.push(snake[snake.length - 1] + directionUp)
  } else if (button === directionDown) {
    snake.shift()
    snake.push(snake[snake.length - 1] + directionDown)
  }
}

// moveSnake()
console.log(snake[snake.length - 1] + 1)
// console.log(snake)

button[0].addEventListener('click', () => {
  const shifr = snake.shift()
  snake.push(snake[snake.length - 1] + 1)
  blackFilter.forEach((nums) => {
    boxes[nums].style.backgroundColor = 'black'
  })
  whiteFilter.forEach((nums) => {
    boxes[nums].style.backgroundColor = 'white'
  })
  drawSnake()
})
button[1].addEventListener('click', () => {
  const shifr = snake.shift()
  snake.push(snake[snake.length - 1] - 1)
  blackFilter.forEach((nums) => {
    boxes[nums].style.backgroundColor = 'black'
  })
  whiteFilter.forEach((nums) => {
    boxes[nums].style.backgroundColor = 'white'
  })
  drawSnake()
})
button[2].addEventListener('click', () => {
  const shifr = snake.shift()
  snake.push(snake[snake.length - 1] + 14)
  blackFilter.forEach((nums) => {
    boxes[nums].style.backgroundColor = 'black'
  })
  whiteFilter.forEach((nums) => {
    boxes[nums].style.backgroundColor = 'white'
  })
  drawSnake()
})
button[3].addEventListener('click', () => {
  const shifr = snake.shift()
  snake.push(snake[snake.length - 1] - 14)
  blackFilter.forEach((nums) => {
    boxes[nums].style.backgroundColor = 'black'
  })
  whiteFilter.forEach((nums) => {
    boxes[nums].style.backgroundColor = 'white'
  })
  drawSnake()
})
// snake.shift()
// snake.push(snake[snake.length] + 1)

// console.log(snake[snake.length] + 1)

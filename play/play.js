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

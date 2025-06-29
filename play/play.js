const container = document.querySelector(".container")
const rows = 14
const columns = 14

for (let i = 0; i < rows * columns; i++) {
  const newEl = document.createElement("div")
  newEl.setAttribute("class", "boxes")
  container.append(newEl)
}

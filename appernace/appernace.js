//// variables
const changeColor = document.querySelector("#change-Color")

const arrayColor = []

const pictures = [
  {
    name: "Retro Neon",
    img: "images/color1.png",
    blackfilter: "#0f0c29",
    whitefilter: "#f0f8ff",
    background: "#5400fd",
    snakecolor: "#ff00ff",
  },
  {
    name: "Green Matrix",
    img: "images/color2.png",
    blackfilter: "#003300",
    whitefilter: "#99ff99",
    background: "#fd8e00",
    snakecolor: "#00ff00",
  },
  {
    name: "Ocean Wave",
    img: "images/color3.png",
    blackfilter: "#0a2239",
    whitefilter: "#e0f7fa",
    background: "#003b46",
    snakecolor: "#00ced1",
  },
  {
    name: "Candy Pop",
    img: "images/color4.png",
    blackfilter: "#2b2024",
    whitefilter: "#fff1e6",
    background: "#ffcad4",
    snakecolor: "#ff5e78",
  },
  {
    name: "Night Sky",
    img: "images/color5.png",
    blackfilter: "#1a1a2e",
    whitefilter: "#eaeaea",
    background: "#16213e",
    snakecolor: "#0f3460",
  },
  {
    name: "Cyberpunk",
    img: "images/color6.png",
    blackfilter: "#1f1b24",
    whitefilter: "#f4efff",
    background: "#2a2a72",
    snakecolor: "#ff6ec7",
  },
  {
    name: "Forest",
    img: "images/color7.png",
    blackfilter: "#1b262c",
    whitefilter: "#bbe1fa",
    background: "#0f4c75",
    snakecolor: "#3282b8",
  },
  {
    name: "Desert Dune",
    img: "images/color8.png",
    blackfilter: "#5a4e3c",
    whitefilter: "#f3eac2",
    background: "#c9b79c",
    snakecolor: "#a47148",
  },
  {
    name: "Ice Realm",
    img: "images/color9.png",
    blackfilter: "#263238",
    whitefilter: "#e0f7fa",
    background: "#b3e5fc",
    snakecolor: "#0288d1",
  },
]

//// create array that contain all divs
for (let i = 0; i < 9; i++) {
  arrayColor.push(i)
}
//// create the nacessary tags and put inside of them images
arrayColor.forEach((i) => {
  const createDiv = document.createElement("div")
  createDiv.setAttribute("class", "color")
  const createImages = document.createElement("img")
  createImages.setAttribute("data-id", i)
  createDiv.append(createImages)
  changeColor.append(createDiv)
})

const images = document.querySelectorAll("img")

pictures.forEach((picture, index) => {
  images[index].setAttribute("src", picture.img)
})

//// check the chosen decoration and save it in saveDecoration variables
const saveDecoration = localStorage.getItem("decoration")

images.forEach((picture) => {
  if (picture.dataset.id === saveDecoration) {
    picture.style.borderColor = "green"
  }
  picture.addEventListener("click", () => {
    images.forEach((img) => {
      img.style.borderColor = "black"
    })

    picture.style.borderColor = "green"

    localStorage.setItem("decoration", picture.dataset.id)
    changeDecoration()
  })
})

//// apply decoration on appernace.html page
let backGround, snakeColor

const changeDecoration = () => {
  const selected = localStorage.getItem("decoration")
  if (selected !== null && pictures[selected]) {
    const theme = pictures[selected]
    backGround = theme.background
    document.body.style.backgroundColor = backGround
  }
}

changeDecoration()

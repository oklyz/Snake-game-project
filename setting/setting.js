const mod = document.querySelectorAll(".difficulty")

const saveDifficulty = localStorage.getItem("difficulty")

mod.forEach((nums) => {
  if (nums.dataset.difficulty === saveDifficulty) {
    nums.style.color = "green"
  }

  nums.addEventListener("click", () => {
    mod.forEach((el) => {
      el.style.color = "black"
    })

    nums.style.color = "green"

    localStorage.setItem("difficulty", nums.dataset.difficulty)
  })
})

const cheackDifficalty = () => {
  if (saveDifficulty === "easy") {
    speed = 200
  } else if (saveDifficulty === "normal") {
    speed = 150
  } else if (saveDifficulty === "hard") {
    speed = 100
  } else {
    increaseSpeed()
  }
}

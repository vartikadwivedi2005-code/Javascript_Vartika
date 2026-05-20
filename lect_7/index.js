// Game initialization with premium arcade theme coordinates
let canvas = document.querySelector("canvas")
let pen = canvas.getContext("2d")
let snakeCell = [[0, 0]]
let cell = 50
let direction = "right"
let random = generateR()
let gameOver = false
let score = 0

let id = setInterval(() => {
  draw()
  update()
}, 300)

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    direction = 'up'
  } else if (e.key == 'ArrowDown') {
    direction = 'down'
  } else if (e.key == 'ArrowLeft') {
    direction = "left"
  } else if (e.key == 'ArrowRight') {
    direction = 'right'
  }
})

function draw() {
  if (gameOver == true) {
    clearInterval(id)
    pen.fillStyle = "#ff007f" 
    pen.font = "bold 60px sans-serif"
    pen.textAlign = "center"
    pen.fillText("GAME OVER", 500, 300)
    return
  }
  
  // Clear the board smoothly by repainting the base arcade container color
  pen.fillStyle = "#1f2833" 
  pen.fillRect(0, 0, 1000, 600) 
  
  // Render the large aesthetic ghost scoreboard centered in the background layout
  pen.fillStyle = "rgba(255, 255, 255, 0.08)"
  pen.font = "bold 120px sans-serif"
  pen.textAlign = "center"
  pen.fillText(`${score}`, 500, 340) 
  
  // Draw the snake cells using your electric neon cyan palette
  pen.fillStyle = "#00ffcc" 
  for (let a of snakeCell) {
    pen.fillRect(a[0], a[1], cell, cell)
    // Optional: Adds a tiny clean margin grid lines between snake body parts
    pen.strokeStyle = "#1f2833"
    pen.strokeRect(a[0], a[1], cell, cell)
  }
  
  // Draw the high-contrast target food item block using hot laser pink
  pen.fillStyle = "#ff007f" 
  pen.fillRect(random[0], random[1], cell, cell)
}

draw()

function update() {
  let headX = snakeCell[snakeCell.length - 1][0]
  let headY = snakeCell[snakeCell.length - 1][1]

  let newX
  let newY
  
  if (direction == 'right') {
    newX = headX + cell
    newY = headY
    if (newX == 1000) {
      gameOver = true
    }
  }
  else if (direction == "left") {
    newX = headX - cell
    newY = headY
    if (newX < 0) {
      gameOver = true
    }
  }
  else if (direction == "down") {
    newX = headX
    newY = headY + cell
    if (newY == 600) {
      gameOver = true
    }
  }
  else {
    newX = headX
    newY = headY - cell
    if (newY < 0) {
      gameOver = true
    }
  }
  
  snakeCell.push([newX, newY])
  
  if (newX == random[0] && newY == random[1]) {
    random = generateR()
    score++
  } else {
    snakeCell.shift()
  }
}

function generateR() {
  return [
    Math.floor(Math.random() * 1000 / cell) * cell,
    Math.floor(Math.random() * 600 / cell) * cell 
  ]
}
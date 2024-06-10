let x, y, vy, g

function setup() {
  createCanvas(400, 400);
  x = width / 2
  y = height / 2
  vy = 0
  g = 0.5
  textSize(20)
  textAlign(CENTER, CENTER)
}

function draw() {
  background(0)
  noFill()
  stroke(255)
  rect(0, 0, width, height, 10)
  moveX()
  moveY()
  fill(255)
  ellipse(x, y, 20, 20)
  text("BOUNCING BALL", width / 2, 100)


}
function moveX() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5
  }
  x = constrain(x, 10, width - 10)
}
function moveY() {
  vy += g
  y += vy
  if (y >= height - 10) {
    y = height - 11
    vy = -vy * 0.999
  }
}



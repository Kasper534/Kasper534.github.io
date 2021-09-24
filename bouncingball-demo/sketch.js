 
  let x = 300
  let y = 150
  let xspeed = 5
  let yspeed = 4
  
  let r = 20

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  ellipse (x, y, r*2, r*2)
  x += xspeed
  y += yspeed
  if (x > width -r || x < r) {
    xspeed = -xspeed
    fill (random(255),random(255),random(255))
  }
  if (y > height - r || y < r) {
      yspeed = -yspeed
    fill (random(255),random(255),random(255))
  }
}
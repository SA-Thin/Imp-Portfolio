function setup() {
  createCanvas(600, 600);
  radius = min(width, height)/2
  diam = radius * 1.7
  rectMode(CENTER);
}

function draw() {
  background(100);
  noStroke();
  
  fill(250,200,0);
  ellipse(width/2, height/2, diam + 25, diam + 25);
  fill(5,0,5);
  ellipse(width/2, height/2, diam, diam);
  
  fill(255);
  ellipse(width/2, height/2 - 100, 10, 10)
  ellipse(210, 240, 10, 10)
  ellipse(390, 240, 10, 10)
  ellipse(width/2, height/2 + 100, 10, 10)
  
  let current_second = second();
  let current_min = minute();
  let current_hr = hour();
  
  let xs = map(second(), 0, 59, 0, width)
  let xm = map(minute(), 0, 59, 0, width)
  let xh = map(hour(), 0, 23, 0, width)
  
  spinXs = radius / 2 * cos(frameCount/75)
  spinYs = radius / 2 * sin(frameCount/75)
	
  fill(0, 190, 120)
  ellipse(width/2, height/2, xh/3, xh/3)
  fill(190, 120, 0)
  ellipse(width/2 - spinXs, height/2 - 85 - spinYs, 35, 35)
  fill(120, 0, 190)
	rotate(ellipse(width/2 + spinXs, height/2 + spinYs, 35, 35))
  
  fill(255,255,255)
  text(current_second, width/2 + spinXs - 6, height/2 + spinYs)
  text(current_min, width/2 - spinXs - 6, height/2 - 85 - spinYs)
  text(current_hr, width/2 - 6, height/2)
  
}
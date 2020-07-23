let spritesheet;
let spritedata;
let animation = [];
let lassys = [];
let level = 1;
let number_of_lassy_stopped = 0;

let gameFont;

function preload() {
  spritedata = loadJSON("assets/lassy.json");
  spritesheet = loadImage("assets/lassy.png");
  gameFont = loadFont("assets/pixelFont.ttf");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  let frames = spritedata.frames;
  //   strokeWeight(width / 375);
  textFont(gameFont);
  textAlign(CENTER);
  textSize(width / 30);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  for (let i = 0; i < 5; i++) {
    lassys[i] = new Sprite(
      animation,
      0,
      (i * height) / 5 + 50,
      random(level / 10, level / 8)
    );
  }
  noCursor();
}

function draw() {
  background(25, 0, 54);

  push();
  noStroke();
  textSize(18);
  textAlign(RIGHT);
  fill(202, 41, 255);
  text("Level " + level, width - 25, 25);
  fill(255, 74, 231);
  text("Catched " + number_of_lassy_stopped + "/5", width - 25, 45);
  fill(255);

  pop();
  for (let lassy of lassys) {
    lassy.show();
    lassy.animate();
  }
  if (number_of_lassy_stopped >= 5) {
    fill(117, 255, 184);
    text("Hooray you stopped lassy !!!", width / 2, height / 2 - 50);
    fill(117, 168, 255);
    text("Press SPACE to go to next level", width / 2, height / 2 + 50);
  }
  noStroke();
  fill(22, 251, 511);
  ellipse(mouseX, mouseY, 20, 20);
  fill(255, 211, 111, 150);
  ellipse(mouseX, mouseY, 30, 30);
}

function mouseClicked() {
  for (let lassy of lassys) {
    lassy.show();
    lassy.animate();
    if (mouseX > lassy.x && mouseX < lassy.x + lassy.w) {
      if (mouseY > lassy.y && mouseY < lassy.y + lassy.h) {
        if (!lassy.isStopped) {
          lassy.stop();
          number_of_lassy_stopped += 1;
        }
      }
    }
  }
}

function keyPressed() {
  if (key === " ") {
    number_of_lassy_stopped = 0;
    level += 1;
    lassys = [];

    for (let i = 0; i < 5; i++) {
      lassys[i] = new Sprite(
        animation,
        0,
        (i * height) / 5,
        random(level / 11, level / 9)
      );
    }
  }
}

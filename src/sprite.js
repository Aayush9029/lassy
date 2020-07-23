class Sprite {
  constructor(animation, x, y, speed) {
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.h = this.animation[0].height;

    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;

    this.isStopped = false;
  }

  show() {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y);

    fill(255);
    // rect(this.x, this.y, this.w, this.h);
  }

  animate() {
    this.index += this.speed;
    this.x += this.speed * 15;

    if (this.x > width) {
      noLoop();
      textSize(width / 30);
      fill(255, 89, 74);
      text("Oh Noo, lassy Escaped !", width / 2, height / 2 - 50);
      textSize(width / 35);
      fill(255, 180, 41);

      text(
        "Feel free to refresh the page to restart",
        width / 2,
        height / 2 + 50
      );
    }
  }
  stop() {
    this.isStopped = true;
    this.speed = 0;
  }
}

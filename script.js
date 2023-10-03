window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 600;
  canvas.height = 600;
  // canvas settings
  console.log(ctx);
  ctx.lineWidth = 30;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'green';
  ctx.fillStyle = 'blue';

  class Fractal {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = this.canvasWidth * 0.3;
      this.sides = 6;
      this.maxLevel = 3;
      this.scale = 0.5;
      this.spread = 1;
      this.branches = 2;
    }
    draw(context) {
      context.save();
      context.translate(this.canvasWidth / 2, this.canvasHeight / 2);
      context.scale(1, 1);
      context.rotate(0);
      for (let i = 0; i < this.sides; i++) {
        this.#drawLine(context, 0);
        context.rotate((Math.PI * 2) / this.sides);
      }
      context.restore();
    }
    #drawLine(context, level) {
      if (level > this.maxLevel) return;
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(this.size, 0);
      context.stroke();

      for (let i = 0; i < this.branches; i++) {
        context.save();
        context.translate(this.size - (this.size / this.branches) * i, 0);
        context.scale(this.scale, this.scale);

        context.save();
        context.rotate(this.spread);
        this.#drawLine(context, level + 1);
        context.restore();

        context.save();
        context.rotate(-this.spread);
        this.#drawLine(context, level + 1);
        context.restore();

        context.restore();
      }
    }
  }

  const fractal1 = new Fractal(canvas.width, canvas.height);
  fractal1.draw(ctx);

  class Particle {}

  class Rain {}
});

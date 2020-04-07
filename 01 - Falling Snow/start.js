(() => {
    // เริ่มเขียนโค้ด
  function setup() {
    const canvas = document.getElementById('falling-snow-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    return {
      canvas,
      canvasContext: canvas.getContext('2d'),
      numberOfSnowBalls: 250
    }
  }

  function createSnowBalls(canvas, numberOfSnowBalls) {
    return [...Array(numberOfSnowBalls)].map(() => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        opacity: random(0.5, 1),
        radius: random(2, 4)
      }
    });
  }

  function drawSnowBall(canvasContext, snowBall) {
    canvasContext.beginPath();
    canvasContext.arc(snowBall.x, snowBall.y, snowBall.radius, 0, Math.PI * 2);
    canvasContext.fillStyle = `rgba(255, 255, 255, ${snowBall.opacity})`;
    canvasContext.fill();
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function run() {
    const {canvas, canvasContext, numberOfSnowBalls} = setup();
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
    snowBalls.forEach((snowBall) => drawSnowBall(canvasContext, snowBall));
  }

  run();
})();

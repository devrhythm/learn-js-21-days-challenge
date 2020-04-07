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
        y: random(0, canvas.height)
      }
    });
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function run() {
    const {canvas, canvasContext, numberOfSnowBalls} = setup();
    createSnowBalls(canvas, numberOfSnowBalls);
  }

  run();
})();

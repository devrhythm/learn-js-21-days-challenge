(() => {
    // เริ่มเขียนโค้ด
  function setup() {
    const canvas = document.getElementById('falling-snow-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    return {
      canvas,
      canvasContext: canvas.getContext('2d'),
      numberOfSnowBall: 250
    }
  }

  function run() {
    const {canvas, canvasContext, numberOfSnowBall} = setup();
  }

  run();
})();

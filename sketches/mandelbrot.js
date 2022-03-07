let x = 50;
let y = 50;

export const setup = (p5, canvasParentRef) => {
  p5.createCanvas(1000, 500).parent(canvasParentRef);
  p5.pixelDensity(1);
  p5.noLoop();
};

export const draw = (p5) => {
  const w = 4;
  const h = (w * p5.height) / p5.width;

  // Start at negative half the width and height
  const xmin = -w / 2;
  const ymin = -h / 2;

  // Make sure we can write to the pixels[] array.
  // Only need to do this once since we don't do any other drawing.
  p5.loadPixels();

  // Maximum number of iterations for each point on the complex plane
  const maxiterations = 100;

  // x goes from xmin to xmax
  const xmax = xmin + w;
  // y goes from ymin to ymax
  const ymax = ymin + h;

  // Calculate amount we increment x,y for each pixel
  const dx = (xmax - xmin) / p5.width;
  const dy = (ymax - ymin) / p5.height;

  // Start y
  let y = ymin;
  for (let j = 0; j < p5.height; j++) {
    // Start x
    let x = xmin;
    for (let i = 0; i < p5.width; i++) {
      // Now we test, as we iterate z = z^2 + cm does z tend towards infinity?
      let a = x;
      let b = y;
      let n = 0;
      while (n < maxiterations) {
        const aa = a * a;
        const bb = b * b;
        const twoab = 2.0 * a * b;
        a = aa - bb + x;
        b = twoab + y;
        // Infinty in our finite world is simple, let's just consider it 16
        if (p5.dist(aa, bb, 0, 0) > 16) {
          break; // Bail
        }
        n++;
      }

      // We color each pixel based on how long it takes to get to infinity
      // If we never got there, let's pick the color black
      const pix = (i + j * p5.width) * 4;
      const norm = p5.map(n, 0, maxiterations, 0, 1);
      let bright = p5.map(p5.sqrt(norm), 0, 1, 0, 255);
      if (n == maxiterations) {
        bright = 0;
      } else {
        // Gosh, we could make fancy colors here if we wanted
        p5.pixels[pix + 0] = bright;
        p5.pixels[pix + 1] = bright;
        p5.pixels[pix + 2] = bright;
        p5.pixels[pix + 3] = 255;
      }
      x += dx;
    }
    y += dy;
  }
  p5.updatePixels();
};

let values = [];
let i = 0;
let j = 0;

export const setup = (p5, canvasParentRef) => {
  p5.createCanvas(800, 400).parent(canvasParentRef);

  for (let i = 0; i < p5.width / 8; i++) {
    values.push(p5.random(p5.height));
  }
};

export const draw = (p5) => {
  p5.background(220);

  for (let k = 0; k < 8; k++) {
    if (i < values.length) {
      let temp = values[j];
      if (values[j] > values[j + 1]) {
        values[j] = values[j + 1];
        values[j + 1] = temp;
      }
      j++;

      if (j >= values.length - i - 1) {
        j = 0;
        i++;
      }
    } else {
      p5.noLoop();
    }
  }

  for (let i = 0; i < values.length; i++) {
    p5.stroke(100, 143, 143);
    p5.fill(50);
    p5.rect(i * 8, p5.height, 8, -values[i], 20);
  }
};

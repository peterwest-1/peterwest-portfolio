let x = [],
  y = [],
  segNum = 20,
  segLength = 18;

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

export const setup = (p5, canvasParentRef) => {
  p5.createCanvas(800, 400).parent(canvasParentRef);
  p5.strokeWeight(9);
  p5.stroke(255, 100);
};

export const draw = (p5) => {
  p5.background(0);
  dragSegment(0, p5.mouseX, p5.mouseY, p5);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i], p5);
  }
};

function dragSegment(i, xin, yin, p5) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = p5.atan2(dy, dx);
  x[i] = xin - p5.cos(angle) * segLength;
  y[i] = yin - p5.sin(angle) * segLength;
  segment(x[i], y[i], angle, p5);
}

function segment(x, y, a, p5) {
  p5.push();
  p5.translate(x, y);
  p5.rotate(a);
  p5.line(0, 0, segLength, 0);
  p5.pop();
}

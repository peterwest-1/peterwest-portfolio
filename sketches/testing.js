export const setup = (p5, canvasParentRef) => {
  p5.createCanvas(800, 400).parent(canvasParentRef);
};

export const draw = (p5) => {
  p5.background(0);
};

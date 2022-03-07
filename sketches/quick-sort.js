let values = [];
let states = [];

export const setup = (p5, canvasParentRef) => {
  p5.createCanvas(800, 400).parent(canvasParentRef);

  for (let i = 0; i < p5.width / 8; i++) {
    values.push(p5.random(p5.height));
    states.push(-1);
  }
  quickSort(0, values.length - 1);
};

export const draw = (p5) => {
  p5.background(0);

  for (let i = 0; i < values.length; i++) {
    // color coding
    if (states[i] == 0) {
      // color for the bar at the pivot index
      p5.fill(255, 0, 0);
    } else if (states[i] == 1) {
      // color for the bars being sorted currently
      p5.fill(0, 255, 0);
    } else {
      p5.fill(255);
    }
    p5.rect(i * 8, p5.height - values[i], 8, values[i]);
  }
};

async function quickSort(start, end) {
  if (start > end) {
    // Nothing to sort!
    return;
  }
  // partition() returns the index of the pivot element.
  // Once partition() is executed, all elements to the
  // left of the pivot element are smaller than it and
  // all elements to its right are larger than it.
  let index = await partition(start, end);
  // restore original state
  states[index] = -1;
  await Promise.all([quickSort(start, index - 1), quickSort(index + 1, end)]);
}

// We have chosen the element at the last index as
// the pivot element, but we could've made different
// choices, e.g. take the first element as pivot.
async function partition(start, end) {
  for (let i = start; i < end; i++) {
    // identify the elements being considered currently
    states[i] = 1;
  }
  // Quicksort algorithm
  let pivotIndex = start;
  // make pivot index distinct
  states[pivotIndex] = 0;
  let pivotElement = values[end];
  for (let i = start; i < end; i++) {
    if (values[i] < pivotElement) {
      await swap(i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(end, pivotIndex);
  for (let i = start; i < end; i++) {
    // restore original state
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }
  return pivotIndex;
}

// swaps elements of 'values' at indices 'i' and 'j'
async function swap(i, j) {
  // adjust the pace of the simulation by changing the
  // value
  await sleep(25);
  let temp = values[i];
  values[i] = values[j];
  values[j] = temp;
}

// custom helper function to deliberately slow down
// the sorting process and make visualization easy
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

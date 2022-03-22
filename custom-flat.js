const input = [
  [1, 2],
  [3, [4, 5], 6],
  [7, 8, 9],
];

// const result = input.flat(2);

function customFlat(depth = 1) {
  let output = [];
  this.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      output = output.concat(element.customFlat(depth - 1));
    } else {
      output.push(element);
    }
  });

  return output;
}

Array.prototype.customFlat = customFlat;

const result = input.customFlat(2);

console.log('result::', result);

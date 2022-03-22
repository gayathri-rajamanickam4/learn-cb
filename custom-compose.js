function AddTwo(input) {
  return input + 2;
}

function SubtractFive(input) {
  return input - 5;
}

function MultiplyEight(input) {
  return input * 8;
}

function compose(...functions) {
  return (args) => {
    return functions.reduceRight((result, fn) => {
      return fn(result);
    }, args);
  };
}

const composeFn = compose(AddTwo, SubtractFive, MultiplyEight);
console.log(composeFn(2));

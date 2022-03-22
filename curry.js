const sum = function (a, b, c) {
  return a + b + c;
};

const curry = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c; // logic
    };
  };
};

const sumFour = function (a, b, c, d) {
  return a + b + c + d;
};

const sumCurry = curry(1)(2)(3);
const actualSum = sum(1, 2, 3);
console.log(sumCurry, actualSum);

// multi argument
const multiArgCurry = function (fn) {
  return function curriedFn(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    else {
      return function (arg2) {
        return curriedFn.apply(this, args.concat(arg2));
      };
    }
  };
};

const multiArgSum = multiArgCurry(sum);

const multiArgSumAns = multiArgSum(1)(2)(3);

console.log(multiArgSumAns);

const addCurry = function first(a) {
  return function (b) {
    if (!b) return a;
    return first(a + b);
  };
};

console.log(addCurry(1)(2)(3)(4)(5)());

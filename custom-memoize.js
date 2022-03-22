const myCrazyFunction = (num1, num2) => {
  for (let i = 0; i < 10000000; i++) {}
  console.log('myCrazyFunction called');
  return num1 * num2;
};

function myCustomMemoize(fn) {
  let resultCache = new Map();
  return function (...args) {
    const argsKey = JSON.stringify(args);
    const cacheHit = resultCache.has(argsKey);

    if (!cacheHit) resultCache.set(argsKey, fn(...args));

    console.log(resultCache);

    return resultCache.get(argsKey);
  };
}

myFunction = myCustomMemoize(myCrazyFunction);

console.time('First call');
console.log(myFunction(2, 4));
console.timeEnd('First call');

console.time('2nd call');
console.log(myFunction(2, 4));
console.timeEnd('2nd call');

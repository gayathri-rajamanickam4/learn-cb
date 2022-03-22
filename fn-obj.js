function fn() {}
const f1 = fn();
const f2 = new fn();

console.log('f1::', f1); //undefined
console.log('f2::', f2); //function object with prototype

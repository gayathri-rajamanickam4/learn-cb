console.log(getName); // undefined
getName(); // throws error 'getName' is not function
console.log(x);
console.log(getName);
var x = 7;
var getName = function () {
  console.log('getName function');
};
// if getName is defined as function getName() {}, at the time
// of hoisting itself, function content will be assigned to getName variable
// but in case of arrow function, getName is assigned with 'undefined'

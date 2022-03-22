var a = 10;
{
  function test() {
    var a = 20;
    console.log('a in test::', a); //20
  }
  test(); // 20
  console.log('a below test::', a); // 10
}
test(); // 20
console.log('a::', a); //10

var b = 20;
{
  let b = 30;
  console.log('b::', b);
}

console.log('b::', b);

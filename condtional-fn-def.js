function foo() {
  console.log(a); // undefined
  if (true) {
    console.log(a);
    a();
    function a() {
      console.log(9);
    }
  }
  console.log(a);
}

foo();

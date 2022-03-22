b = 'abc';
var a = {
  b: this, //window object
  c: function () {
    console.log(this); // a object
    return this.b;
  },
};

const result = a.c(); //returns this object
console.log('result::', result);

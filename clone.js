function clone(object) {
  if (!object) return object;

  let result;
  if (Array.isArray(object)) {
    result = [];
  } else result = {};

  if (object instanceof Date || object instanceof Function) {
    return object;
  }

  for (let prop in object) {
    if (typeof object[prop] === 'object') {
      // console.log(object[prop]);
      result[prop] = clone(object[prop]);
    } else result[prop] = object[prop];
  }

  return result;
}

// let o = { a: 1, b: { c: 'hello' } };
// let o = [{ a: 32, b: 45, c: 56 }, { d: new Date() }, { e: () => {} }];

const Person = function (name) {
  this.name = name;
};

let o = new Person();
console.log(typeof o);

const result = clone(o);
// o[0].b = 'world';
// o[2].e = 'world';
console.log('input::', o);
console.log('result::', result);

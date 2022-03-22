const sayHelloPromise1 = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('Hello ' + name);
    }, 5000);
  });
};

const sayHelloPromise2 = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('Hello ' + name);
    }, 1000);
  });
};

const simplePromise = () => Promise.resolve('Good morning');

// Promise.all([sayHelloPromise('Gayathri'), simplePromise()]).then((value) =>
//   console.log(value)
// );

function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let allValues = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((response) => {
          allValues.push(response);
          if (allValues.length === promises.length) {
            resolve(allValues);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

customPromiseAll([
  sayHelloPromise1('Gayathri'),
  simplePromise(),
  sayHelloPromise2('Nila'),
]).then((value) => console.log(value));

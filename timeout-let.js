(() => {
  setTimeout(() => {
    n++;
    console.log('n::', n); //1
  }, 3000);
  let n = 0;
  setTimeout(() => {
    n++;
    console.log('n::', n); //2
  }, 5000);
})();

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log('i::', i);
  }, 1000);
}

document.querySelector('#products').addEventListener('click', (event) => {
  console.log('clicked on::', event.target);
  window.location += '#' + event.target.id;
});

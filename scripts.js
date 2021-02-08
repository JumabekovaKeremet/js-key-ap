let button = document.querySelector('button');
let fullName = document.querySelector('#full-name');

button.addEventListener('click', function(event){
  console.log(event);
  event.preventDefault();
});

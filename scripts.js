let button = document.querySelector('button');

button.addEventListener('click', function(event){
  console.log(event);
  event.preventDefault();
});
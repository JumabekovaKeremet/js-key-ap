let button = document.querySelector('button');

button.addEventListener('click', function(event){
  alert('test');


  event.preventDefault();
});
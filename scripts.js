let button = document.querySelector('button');
let fullName = document.querySelector('#full-name');

button.addEventListener('click', function(event){
     event.preventDefault();
});
fullName.addEventListener("keydown", function(event){ //при нажатии на клавищу
    console.log(event.code);
    console.log(event.key);
   if (event.key == 'z') {
       event.preventDefault();
   }
});
fullName.addEventListener("keyup", function(event){//при изминения вводда
    console.log("keyup");
});
fullName.addEventListener("change", function(event){ // при отпускании клавища
    console.log("change");
});
fullName.addEventListener("input", function(event){// при изминения поля потря фокуса
    console.log("input");
});
fullName.addEventListener("copy", function(event){//при копировании 
    console.log("copy");
});
fullName.addEventListener("paste", function(event){//при вставке 
    console.log("paste");
});
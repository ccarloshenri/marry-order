const noButton = document.querySelector(".main__button_no");
const yesButton = document.querySelector(".main__button_yes");


noButton.addEventListener('mouseover', function(event){
    noButton.style.position = "absolute"
    noButton.style.top = String(__getRandomInt(1, 500)) + 'px'
    noButton.style.left = String(__getRandomInt(1, 500)) + 'px'
})

yesButton.addEventListener('click', function(event){

    x = 0
    while ( x < 20) {
        console.log(x)
        x = x + 1
        var gato = document.createElement("span" + x);
        gato.classList.add("gato");
      
      
        gato.style.left = String(__getRandomInt(-600, 600)) + 'px'
        gato.style.top = String(__getRandomInt(-600, 600)) + 'px'
      
      
        var size = Math.random() * (200 - 20 + 1) + 20;
      
       
        gato.style.width = size + "px";
        gato.style.height = size + "px";
        document.body.appendChild(gato);
        setTimeout(() => {
          gato.remove();
        }, 1000);
    }
    x = 0
    while ( x < 20) {
        console.log(x)
        x = x + 1
        var gato = document.createElement("span2" + x);
        gato.classList.add("gato2");
      
      
        gato.style.left = String(__getRandomInt(-600, 600)) + 'px'
        gato.style.top = String(__getRandomInt(-600, 600)) + 'px'
      
      
        var size = Math.random() * (200 - 20 + 1) + 20;
      
       
        gato.style.width = size + "px";
        gato.style.height = size + "px";
        document.body.appendChild(gato);
        setTimeout(() => {
          gato.remove();
        }, 1000);
    }
    x = 0
    while ( x < 20) {
        console.log(x)
        x = x + 1
        var gato = document.createElement("span3" + x);
        gato.classList.add("gato3");
      
      
        gato.style.left = String(__getRandomInt(-600, 600)) + 'px'
        gato.style.top = String(__getRandomInt(-600, 600)) + 'px'
      
      
        var size = Math.random() * (200 - 20 + 1) + 20;
      
       
        gato.style.width = size + "px";
        gato.style.height = size + "px";
        document.body.appendChild(gato);
        setTimeout(() => {
          gato.remove();
        }, 1000);
    }
})


function __getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

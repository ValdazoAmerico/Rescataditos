



// const post1 = document.getElementById('post1')
// post1.addEventListener('click', function(e){
//     e.preventDefault();
//     post1.classList.toggle('girar')
// })

$(document).ready(function(){
    $('.post-list').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled : true
        }
    });
});

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}



const text = document.querySelector('#animation')
const strText = text.textContent
const splitText = strText.split("")
text.textContent = ""

for (let i = 0; i < splitText.length; i++){
  text.innerHTML +=  "<span>" + splitText[i] + "</span>";
}

let char = 0
let timer = setInterval(onTick, 50)

function onTick(){
  const span = text.querySelectorAll('span')[char]
  span.classList.add('fade')
  char++
  if(char == splitText.length){
    complete()
    return
  }
}

function complete(){
  clearInterval(timer)
  timer = null
}


setTimeout(function() {
  const text = document.querySelector('#animation2')
const strText = text.textContent
const splitText = strText.split("")
text.textContent = ""

for (let i = 0; i < splitText.length; i++){
  text.innerHTML +=  "<span>" + splitText[i] + "</span>";
}

let char = 0
let timer = setInterval(onTick, 50)

function onTick(){
  const span = text.querySelectorAll('span')[char]
  span.classList.add('fade2')
  char++
  if(char == splitText.length){
    complete()
    return
  }
}

function complete(){
  clearInterval(timer)
  timer = null
}




},500)
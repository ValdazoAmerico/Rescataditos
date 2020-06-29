

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
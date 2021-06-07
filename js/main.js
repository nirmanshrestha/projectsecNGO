console.log("hello");
$(window).scroll( function(){
if($(this).scrollTop() > 100){
  $(".up").removeClass("hey");
  $(".navbar").addClass("fixed-top");
}
else{
  $(".up").addClass("hey");
  $(".navbar").removeClass("fixed-top");
}
});

$(".up").click(function(){
  $(window).scrollTop(0)
})





var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("hisSlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

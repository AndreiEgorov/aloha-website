$(document).ready(function (){

    $(".carousel").flickity({
        // options
        freeScroll: false,
        wrapAround: true,
        groupCells: true,
        // freeScroll: true,
        contain: true,
        // disable previous & next buttons and dots
        prevNextButtons: false,
        

      });



 // Source: https://css-tricks.com/snippets/jquery/smooth-scrolling/#article-header-id-1
 $('a[href*="#"]')
 // Remove links that don't actually link to anything
 .not('[href="#"]')
 .not('[href="#0"]')
 .click(function(event) {
   // On-page links
   if (
     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
     && 
     location.hostname == this.hostname
   ) {
     // Figure out element to scroll to
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     // Does a scroll target exist?
     if (target.length) {
       // Only prevent default if animation is actually gonna happen
       event.preventDefault();
       $('html, body').animate({
         scrollTop: target.offset().top
       }, 1000, function() {
         // Callback after animation
         // Must change focus!
         var $target = $(target);
         $target.focus();
         if ($target.is(":focus")) { // Checking if the target was focused
           return false;
         } else {
           $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
           $target.focus(); // Set focus again
         };
       });
     }
   }
 });



$("#subscribe-form").on("submit", function(event){  //for some reason .on"submit" did not function, so I used .on click to create an alert when submitting email
  event.preventDefault;
  if ($("input").val() ===""){
  alert("Please, enter a valid email address");
}
  else {
  alert("Thanks for subscribing!")
  }

});



//to make a number go up on a shopping basket every time the "add-to-cart" is clicked.
var shoppingCount = 0;
$(".add-to-cart").on("click", function(){
  
  shoppingCount++;

  $(".shopping-count").css("visibility", "visible"); //to make a basket appear on the first click
  $(".shopping-count").html(shoppingCount);

});



});






<<<<<<< HEAD
$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        arrows: false,
        vertical: true,
        verticalSwiping:true,
        horizontalSwiping: false,
      });
      $('.slider-team').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
$('.clients__slider').slick({
  dots:false
   });

   

=======
$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        arrows: false,
        vertical: true,
        verticalSwiping:true,
        horizontalSwiping: false,
      });
      $('.slider-team').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
$('.clients__slider').slick({
  dots:false
   });

   

>>>>>>> ec57cd036e11c73bb508996f426fb4f2bf6e0de7
});
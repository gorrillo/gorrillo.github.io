$(document).ready(function(){
  $('.main-slider').slick({
    dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // appendArrows: $('.one-time-arrow'),
  //           prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> <img src="images/arrow-left.png" alt=""></button>',
  //           nextArrow: '<button id="next" type="button" class="btn btn-juliet"><img src="images/arrow-right.png" alt=""> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
  });
});



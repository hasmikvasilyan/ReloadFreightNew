$(document).ready(function() {
  
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    $(".responsiveMenu").removeClass("open show");
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
          
        });
      }
    }
  });
   $(".burgerMenu").click(function(){
    $(".responsiveMenu").addClass("open");

 }); 
 $(".close").click(function(){
    $(".responsiveMenu").removeClass("open");                                                       
 });
  // $(window).scroll(function(){
  //   if ($(this).scrollTop() > $("#aboutUs").offset().top) {
  //     $('.goUp').fadeIn();
  //   } 
  //   else {
  //     $('.goUp').fadeOut();
  //   }
  // });

  $('.goUp').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

$('.play').click(function(){
    $(".popupWrap").addClass("show");
 });
$('.shut').click(function(){
  $(".popupWrap").removeClass("show");
    $('.video').attr('src', $('iframe').attr('src'));
})   
if (screen.width > 768) {
  $('.vacancyContainer .position').click(function(){
    $('.vacancyContainer .position').removeClass('clicked');
    $(this).addClass('clicked');
    $('div.tab').hide();
    $('div.tab.'+$(this).attr('data-position')).show();
    return false;
  });
}
else{
  $('.vacancyContainer .position').removeClass('clicked');
  $('.vacancyContainer .position').on('click', function() {
    if ($(this).hasClass('clicked')) {
      $(this).removeClass('clicked');
      $(this)
        .siblings('.'+$(this).attr('data-position'))
        .slideUp(500);
} else {
      $('.vacancyContainer .position').removeClass('clicked');
      $(this).addClass('clicked');
      $('.accardion').slideUp(500);
      $(this)
        .siblings('.'+$(this).attr('data-position'))
        .slideDown(500);
    }
  });
}


const activateBlog=function(){
  $('.blogMenuItem').removeClass('selected');
  $(this).addClass('selected');
  $('.blogContent').hide();
  $('div.'+$(this).attr('data-menu')).show();
  return false;
}
$('.blogMenuItem').on("click", activateBlog);
// $('.blogSelect').on("change", activateBlog);
$('.video .videoBtn').click(function(){
  $('.videoFrame')[0].style.zIndex = "1";
  $(this).hide;
  $('.videoFrame')[0].src += "?autoplay=1";;
  
});
$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        $(".popupWrap").removeClass("show");
    }
});
var stickyOffset = $('.header').offset().top;
$(window).scroll(function(){
  var header = $('.header'),
      scroll = $(window).scrollTop();

  if (scroll > stickyOffset){
    header.addClass('sticky');    
  } 
  else header.removeClass('sticky');
});

// if (screen.width <= 768) {
//   $('.vacancyContainer .apply').click(function(){
//   $('.position').removeClass('clicked');
//   $('.position[data-position='+$(this).attr('data-name')).addClass('clicked');
//   $('div.tab').toggle();
//   $('div.'+$(this).attr('data-name')).show();
//   return false;
// });
// }



// $('#tabs li a').click(function(){
//   var t = $(this).attr('href').replace('#', '');
// alert(t);
// $('#tabs li a').removeClass('active');           
//     $(this).addClass('active');
//    $('.work').hide();
//     $('.work[data-title*="' + t + '"]').fadeIn('slow');
 
// });
});

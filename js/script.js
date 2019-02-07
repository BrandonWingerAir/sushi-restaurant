$(document).ready(function() {
  // Toggler Button
  $('.navbar-toggler').click(function(){

    $('.navbar-toggler').toggleClass('change')

  })
  // Sticky Navbar Padding
  $(window).scroll(function(){

    let position = $(this).scrollTop();
    
    if(position >= 600) {
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }

  })

  // Smooth Scroll
  $('.nav-item a, .header-link, #back-to-top, #chef-btn, #order-btn').click(function(link){
    link.preventDefault();

    let target = $(this).attr('href');

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25
    }, 3000);
  })

  // Back To Top
  $(window).scroll(function(){

    let position = $(this).scrollTop();
    
    if(position >= 600) {
      $('#back-to-top').addClass('scrollTop');
    } else {
      $('#back-to-top').removeClass('scrollTop');
    }

  })

  // Ripples
  $("#header, .info").ripples({
    dropRadius: 25,
    perturbance: 0.006,
  });

  // Magnific Popup
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',

    gallery:{
      enabled:true
    }
    // other options
  });
});

// Faqs
$('.faq-head').on('click', function () {
  if ($(this).parent().find('.faq-body').css('display') === "none") {
    $('.faq-body').slideUp()
    $('.faq-head').removeClass('opened')
    $(this).parent().find('.faq-body').slideDown()
    $(this).addClass('opened')
  } else {
    $('.faq-body').slideUp()
    $('.faq-head').removeClass('opened')
  }
})


// Bank tabs
$('.bank-buttons button').on('click', function() {
  $('.bank-buttons button').removeClass('active')
  $(this).addClass('active')
  $('.bank-tab').hide()
  $('#bank-tab-'+$(this).data('tab-id')).fadeIn()
})


// Mobile menu dropdowns
$('.mobile-menu > ul > li > a').on('click', function() {
  if ($(this).parent().find('.menu-drop').css('display') === "none") {
    $('.menu-drop').slideUp()
    $(this).parent().find('.menu-drop').slideDown()
  } else {
    $('.menu-drop').slideUp()
  }
})


// Mobile menu toggle
$('.hamburger-btn').on('click', function() {
  $('.mobile-menu-bg').addClass('show')
  $('.mobile-menu').addClass('show')
})

$('.mobile-menu-bg').on('click', function() {
  $('.mobile-menu-bg').removeClass('show')
  $('.mobile-menu').removeClass('show')
})

$('.close-menu').on('click', function() {
  $('.mobile-menu-bg').removeClass('show')
  $('.mobile-menu').removeClass('show')
})


// Header scroll
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > 90){
       // downscroll code
       $('header').addClass('sticky')
        $('.mega-menu').css("top", "74px")
   } else {
      // upscroll code
      $('header').removeClass('sticky')
        $('.mega-menu').css("top", "114px")
   }
});
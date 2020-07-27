/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && $(window).width() <= 767) {
  //alert('Touch Screen');
} else {

}

(function($) {
  'use strict'


  /* ==================================================
  # Get scroll bar width
  ===================================================*/
  function getBarwidth() {
    // Create the measurement node
    let scrollDiv = document.createElement('div')
    scrollDiv.className = 'scrollbar-measure'
    document.body.appendChild(scrollDiv)

    // Get the scrollbar width
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    //console.warn(scrollbarWidth); // Mac:  15

    // Delete the DIV
    document.body.removeChild(scrollDiv)
    return scrollbarWidth
  }

  /* ==================================================
  # Smooth Scroll
  ===================================================*/
  function scrollToAnchor() {
    $('.js-scroll-to').on('click', function(event) {
      let $anchor = $(this)
      let headerH = '0'
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - headerH + 'px'
          },
          1000
        )
      event.preventDefault()
    })
  }

  function sideCollapse() {
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar').toggleClass('active')
    })
  }

  function slickCarousel() {
    $('.js-slick-responsive').slick({
      infinite: true,
      speed: 300,
      autoplaySpeed: 300,
        slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
          }
        },
        {
          breakpoint: 960 ,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    })
  }
  function scrollToTop() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn()
      } else {
        $('#back-to-top').fadeOut()
      }
    })
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 400)
      return false
    })
  }
  function init() {
    scrollToAnchor()
    getBarwidth()
    sideCollapse()
    slickCarousel()
    scrollToTop();
  }

  $(document).ready(function() {
    init()
  }) // end document ready function

  $(window).on('scroll', function() {
  })

  // if ($('.x-toTop').length) {
  //   let scrollTrigger = 100, // px
  //     backToTop = function () {
  //       let scrollTop = $(window).scrollTop();
  //       if (scrollTop > scrollTrigger) {
  //         $('.x-toTop').addClass('active');
  //       } else {
  //         $('.x-toTop').removeClass('active');
  //       }
  //     };
  //   backToTop();
  //   $(window).on('scroll', function () {
  //     backToTop();
  //   });
  // }

})(jQuery) // End jQuery

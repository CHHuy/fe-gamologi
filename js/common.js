/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && $(window).width() <= 767) {
  //alert('Touch Screen');
} else {

}

(function ($) {
  'use strict';


  /* ==================================================
  # Get scroll bar width
  ===================================================*/
  function getBarwidth() {
    // Create the measurement node
    let scrollDiv = document.createElement('div');
    scrollDiv.className = 'scrollbar-measure';
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    //console.warn(scrollbarWidth); // Mac:  15

    // Delete the DIV
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }

  /* ==================================================
  # Smooth Scroll
  ===================================================*/
  function scrollToAnchor() {
    $('.js-scroll-to').on('click', function (event) {
      let $anchor = $(this);
      let headerH = '0';
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - headerH + 'px'
          },
          1000
        );
      event.preventDefault();
    });
  }
  function pwd_check() {
    $('.pwd_show').append('<span class="ptxt">Show</span>')
    $(document).on('click', '.pwd_show .ptxt', function() {

      $(this).text($(this).text() == 'Show' ? 'Hide' : 'Show')

      $(this).prev().attr('type', function(index, attr) {
        return attr == 'password' ? 'text' : 'password'
      })

    })
  }
  function init() {
    scrollToAnchor();
    getBarwidth();
    pwd_check();
  }

  $(document).ready(function () {
    init();
  }); // end document ready function

  $(window).on('scroll', function () {
  });

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

})(jQuery); // End jQuery

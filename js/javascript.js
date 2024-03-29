$(document).ready(function () {

  if ($(window).width() < 768) {
    $('.branches .glow').click(function () {
      $('.dropdown-content').slideToggle();
      $('.contact .dropdown-content').hide();
      e.preventDefault();
    })

    $('.contact .glow').click(function () {
      $('.contact .dropdown-content').slideToggle();
      $('.branches .dropdown-content').hide();
      e.preventDefault();
    })

    $('.snip1361 a').click(function () {
      e.preventDefault();
    })

    $("#nav-icon3").click(function () {
      $(this).toggleClass("open");
      $(".nav").toggleClass("fade");
      document.body.classList.toggle('lock-scroll');
      $('.dropdown-content').hide();
    });

    $(".nav li a").click(function () {
      $("#nav-icon3").toggleClass("open");
      $(".nav").toggleClass("fade");
      document.body.classList.toggle('lock-scroll');
      $('.dropdown-content').hide();
    });
  }

  // Scroll Up Nav

  if ($(window).width() > 768) {
    var lastScrollTop = 600;
    $(window).scroll(function () {
      var st = $(this).scrollTop();
      var banner = $('.nav');
      setTimeout(function () {
        if (st > lastScrollTop) {
          banner.addClass('fade-out').removeClass('fade-in');
        } else {
          banner.addClass('fade-in').removeClass('fade-out');
        }
        lastScrollTop = st;
      }, 100);
    });
  }


  var nav = $(".nav");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      nav.removeClass('transparentBG').addClass("blackBG");
    } else {
      nav.removeClass("blackBG").addClass('transparentBG');
    }
  });


  // $(document).ready(function () {
  //   $(window).on('resize', function () {
  //     if ($(window).width() < 767) {
  //       location.reload();
  //     }
  //   });
  // });

  $("a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      var hash = this.hash;

      $("html, body").animate({
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("#return-to-top").fadeIn(200);
    } else {
      $("#return-to-top").fadeOut(300);
    }

    if ($(window).scrollTop() + $(window).height() < $(document).height() - $(".footer").height()) {
      $('#return-to-top').css("position", "fixed"); //resetting it
      $('#return-to-top').css("bottom", "45px"); //resetting it
    }

    if ($(window).width() < 769) {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - $(".footer").height()) {
        $('#return-to-top').css("position", "fixed"); // make it related
        $('#return-to-top').css("bottom", "155px"); // 60 px, height of #toTop
      }
    } else {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - $(".footer").height()) {
        $('#return-to-top').css("position", "fixed"); // make it related
        $('#return-to-top').css("bottom", "110px"); // 60 px, height of #toTop
      }
    }
  });

  $("#return-to-top").click(function () {
    $("body,html").animate({
        scrollTop: 0,
      },
      500
    );
  });

  $('.banner-slick').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });

  $('.slider-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $('.tabs-slick').slick({
    prevArrow: false,
    nextArrow: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }],
    responsive: [{
      breakpoint: 768,
      settings: {
        infinite: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000
      }
    }]
  });

  $('.gallery-slick').slick({
    prevArrow: false,
    nextArrow: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000
      }
    }]
  });

  $('.menu-slick').slick({
    infinite: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        dots: false,
      }
    }]
  });

  if ($(window).width() >= 600) {
    $('.accordion-item').hide();
    $('.tabItem1').fadeIn();
    $('.tabBtn1').click(function () {
      $('.accordion-item').hide();
      $('.tabItem1').fadeIn();
      $('.menu-slick').slick("setPosition", 0);
    })

    $('.tabBtn2').click(function () {
      $('.accordion-item').hide();
      $('.tabItem2').fadeIn();
      $('.menu-slick').slick("setPosition", 0);
    })

    $('.tabBtn3').click(function () {
      $('.accordion-item').hide();
      $('.tabItem3').fadeIn();
      $('.menu-slick').slick("setPosition", 0);
    })
  }

  AOS.init({
    once: true
  });

  // Click function for show the Modal
  $('.show').click(function () {
    $(this).next(".mask").addClass("active");
    $('body').css('overflow', 'hidden');
  });

  // Function for close the Modal
  function closeModal() {
    $(".mask").removeClass("active");
    $('body').css('overflow', 'auto');
  }

  // Call the closeModal function on click
  $(".close, .mask").on("click", function () {
    closeModal();
    $('body').css('overflow', 'auto');
  });
});

$(document).ready(function () {

  const labels = document.querySelectorAll(".accordion-item__label");
  const tabs = document.querySelectorAll(".accordion-tab");

  function toggleShow() {
    const target = this;
    const item = target.classList.contains("accordion-tab") ?
      target :
      target.parentElement;
    const group = item.dataset.actabGroup;
    const id = item.dataset.actabId;

    tabs.forEach(function (tab) {
      if (tab.dataset.actabGroup === group) {
        if (tab.dataset.actabId === id) {
          tab.classList.add("accordion-active");
        } else {
          tab.classList.remove("accordion-active");
        }
      }
    });

    labels.forEach(function (label) {
      const tabItem = label.parentElement;

      if (tabItem.dataset.actabGroup === group) {
        if (tabItem.dataset.actabId === id) {
          tabItem.classList.add("accordion-active");
        } else {
          tabItem.classList.remove("accordion-active");
        }
      }
    });
  }

  labels.forEach(function (label) {
    label.addEventListener("click", toggleShow);
  });

  tabs.forEach(function (tab) {
    tab.addEventListener("click", toggleShow);
  });

});

function setupFBframe(frame) {
  var container = frame.parentNode;

  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight + 100;

  var src =
    "https://www.facebook.com/plugins/page.php" +
    "?href=https%3A%2F%2Fwww.facebook.com%2Fcragensbarandrestaurantmakati" +
    "&tabs=timeline" +
    "&width=" +
    containerWidth +
    "&height=" +
    containerHeight +
    "&small_header=false" +
    "&adapt_container_width=false" +
    "&hide_cover=true" +
    "&hide_cta=true" +
    "&show_facepile=true" +
    "&appId";

  frame.width = containerWidth;
  frame.height = containerHeight;
  frame.src = src;
}

/* begin Document Ready                       				   		
############################################ */

document.addEventListener('DOMContentLoaded', function () {
  var facebookIframe = document.querySelector('#facebook_iframe');
  setupFBframe(facebookIframe);

  /* begin Window Resize                       				   		
  ############################################ */

  // Why resizeThrottler? See more : https://developer.mozilla.org/ru/docs/Web/Events/resize
  (function () {
    window.addEventListener("resize", resizeThrottler, false);

    var resizeTimeout;

    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          actualResizeHandler();
        }, 66);
      }
    }

    function actualResizeHandler() {
      document.querySelector('#facebook_iframe').removeAttribute('src');
      setupFBframe(facebookIframe);
    }
  })();
  /* end Window Resize
  ############################################ */
});
/* end Document Ready                       				   		
############################################ */

scrollOnLoad();

function scrollOnLoad() {
  window.scrollBy(0, 1);
}
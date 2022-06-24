// SP Burger
$(document).ready(function () {

  if ($(window).width() < 768) {
    $('.dropdown .glow').click(function () {
      $('.dropdown-content').slideToggle();
      e.preventDefault();
    })

    $('.snip1361 a').click(function () {
      e.preventDefault();
    })

    $("#nav-icon3").click(function () {
      $(this).toggleClass("open");
      $(".nav").toggleClass("fade");
      document.body.classList.toggle('lock-scroll');
    });

    $(".nav li a").click(function () {
      $("#nav-icon3").toggleClass("open");
      $(".nav").toggleClass("fade");
      document.body.classList.toggle('lock-scroll');
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
          banner.addClass('fade-in').removeClass('fade-out');;
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
  //     } else {}
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
  });
  $("#return-to-top").click(function () {
    $("body,html").animate({
        scrollTop: 0,
      },
      500
    );
  });

  $('.slider-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  AOS.init({
    once: true
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

// Slider(all Slides in a container)
const slider = document.querySelector(".bannerslider")
// All trails 
const trail = document.querySelector(".trail").querySelectorAll("div")

// Transform value
let value = 0
// trail index number
let trailValue = 0
// interval (Duration)
let interval = 500000

// Function to slide forward
const slide = (condition) => {
  // CLear interval
  clearInterval(start)
  // update value and trailValue
  condition === "increase" ? initiateINC() : initiateDEC()
  // move slide
  move(value, trailValue)
  // Restart Animation
  animate()
  // start interal for slides back 
  start = setInterval(() => slide("increase"), interval);
}

// function for increase(forward, next) configuration
const initiateINC = () => {
  // Remove active from all trails
  trail.forEach(cur => cur.classList.remove("active"))
  // increase transform value
  value === 75 ? value = 0 : value += 25
  // update trailValue based on value
  trailUpdate()
}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
  // Remove active from all trails
  trail.forEach(cur => cur.classList.remove("active"))
  // decrease transform value
  value === 0 ? value = 75 : value -= 25
  // update trailValue based on value
  trailUpdate()
}

// function to transform slide 
const move = (S, T) => {
  // transform slider
  slider.style.transform = `translateX(-${S}%)`
  //add active class to the current trail
  trail[T].classList.add("active")
}

const tl = gsap.timeline({
  defaults: {
    duration: 0.6,
    ease: "power2.inOut"
  }
})
tl.from(".bg", {
    x: "-0%",
    opacity: 0
  })
  .from(".bannercont p", {
    opacity: 0
  }, "-=0.3")
  .from(".bannercont h1", {
    opacity: 0,
    y: "30px"
  }, "-=0.3")

// function to restart animation
const animate = () => tl.restart()

// function to update trailValue based on slide value
const trailUpdate = () => {
  if (value === 0) {
    trailValue = 0
  } else if (value === 25) {
    trailValue = 1
  } else if (value === 50) {
    trailValue = 2
  } else if (value === 75) {
    trailValue = 3
  }
}

// Start interval for slides
let start = setInterval(() => slide("increase"), interval)

// Next  and  Previous button function (SVG icon with different classes)
document.querySelectorAll("svg").forEach(cur => {
  // Assign function based on the class Name("next" and "prev")
  cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})

// function to slide when trail is clicked
const clickCheck = (e) => {
  // CLear interval
  clearInterval(start)
  // remove active class from all trails
  trail.forEach(cur => cur.classList.remove("active"))
  // Get selected trail
  const check = e.target
  // add active class
  check.classList.add("active")

  // Update slide value based on the selected trail
  if (check.classList.contains("box1")) {
    value = 0
  } else if (check.classList.contains("box2")) {
    value = 25
  } else if (check.classList.contains("box3")) {
    value = 50
  } else if (check.classList.contains("box4")) {
    value = 75
  }
  // update trail based on value
  trailUpdate()
  // transfrom slide
  move(value, trailValue)
  // start animation
  animate()
  // start interval
  start = setInterval(() => slide("increase"), interval)
}

// Add function to all trails
trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

// Mobile touch Slide Section
const touchSlide = (() => {
  let start, move, change, sliderWidth

  // Do this on initial touch on screen
  slider.addEventListener("touchstart", (e) => {
    // get the touche position of X on the screen
    start = e.touches[0].clientX
    // (each slide with) the width of the slider container divided by the number of slides
    sliderWidth = slider.clientWidth / trail.length
  })

  // Do this on touchDrag on screen
  slider.addEventListener("touchmove", (e) => {
    // prevent default function
    e.preventDefault()
    // get the touche position of X on the screen when dragging stops
    move = e.touches[0].clientX
    // Subtract initial position from end position and save to change variabla
    change = start - move
  })

  const mobile = (e) => {
    // if change is greater than a quarter of sliderWidth, next else Do NOTHING
    change > (sliderWidth / 3) ? slide("increase") : null;
    // if change * -1 is greater than a quarter of sliderWidth, prev else Do NOTHING
    (change * -1) > (sliderWidth / 3) ? slide("decrease"): null;
    // reset all variable to 0
    [start, move, change, sliderWidth] = [0, 0, 0, 0]
  }
  // call mobile on touch end
  slider.addEventListener("touchend", mobile)
})()
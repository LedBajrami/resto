
  var scrollTrigger = 10;

  window.onscroll = function headerInverted() {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      document.querySelector("header").classList.add('inverted');
    } else {
      document.querySelector("header").classList.remove('inverted');
    }
  };



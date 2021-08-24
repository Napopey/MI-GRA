$(function name(params) {
  const anchors = document.querySelectorAll('a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }

  $('.menu__btn').on('click', function(){
    $('.menu__list-item').toggleClass('menu__list-item--active');
  })

  $('.reviews__items').slick({
    slidesToShow: 3,
    arrows: true,
    // prevArrow: '<button type="button" class="slick-prev"><svg width = "153" height = "30" viewBox = "0 0 153 30" fill = "none" xmlns = "http://www.w3org/2000/svg"><path d="M0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768158 14.0948 0.0768158 13.3137 0.857864L0.585786 13.5858ZM153 13L2 13V17L153 17V13Z" fill="black"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width = "153" height = "31" viewBox = "0 0 153 31" fill = "none" xmlns = "http://www.w3.org/2000/svg" ><path d="M152.414 16.799C153.195 16.0179 153.195 14.7516 152.414 13.9706L139.686 1.24263C138.905 0.461581 137.639 0.461581 136.858 1.24263C136.077 2.02368 136.077 3.29001 136.858 4.07106L148.172 15.3848L136.858 26.6985C136.077 27.4795 136.077 28.7459 136.858 29.5269C137.639 30.308 138.905 30.308 139.686 29.5269L152.414 16.799ZM0 17.3848H151V13.3848H0V17.3848Z" fill="black"/></svg></button>',
    responsive: [
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
})

  

  
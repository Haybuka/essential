
let harmburger = document.querySelector('.harmburger');
let navAlt = document.querySelector('.nav-alt');

harmburger.addEventListener('click',()=>{
  navAlt.classList.toggle('slide-left');
  harmburger.classList.toggle('roll')
})
$('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 4,
      arrows:false,
      autoplay:true,
      responsive: [
      {
          breakpoint: 1240,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2,
            autoplaySpeed:2000
          }
        },
        {
          breakpoint: 630,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1,
            autoplaySpeed:1500,
            cssEase:'ease-out'
          }
        }
      ]
    });

    
$('.slide-review').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 2,
  arrows:true,
  autoplay:false,
  responsive: [
  {
      breakpoint: 1240,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1080,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2,
        autoplaySpeed:2000
      }
    },
    {
      breakpoint: 1060,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        autoplaySpeed:1500,
        cssEase:'ease-out'
      }
    },
    {
      breakpoint: 730,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        autoplaySpeed:1500,
        cssEase:'ease-out'
      }
    }
  ]
});
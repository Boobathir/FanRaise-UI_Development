$(window).scroll(function() {
    if ($(this).scrollTop() > 3){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav:true,
        navContainerClass: 'owl-nav text-right',
        //navigationText: ["<img src='arrowLft.svg'>","<img src='arrowRgt.svg'>"],
        navText:["<div class='nav-btn prev-slide'> <img src='imgs/arrowLft.svg' / ></div>","<div class='nav-btn next-slide'><img src='imgs/arrowRgt.svg'></div>"],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
                loop:true
            }
        }
    })
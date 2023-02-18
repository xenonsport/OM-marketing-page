$(function(){

    $(".menu__list-item a, a.go-top").on("click", function (event) {
		event.preventDefault();
    
    var id  = $(this).attr('href'),

		top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1000);
	});
    
    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="previous-slick"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="next-slick"></button>',

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            }
        ]

    });

    $('.menu__btn, a.menu__list-link').click(function(event){

       
        $(".header__top-inner").toggleClass('header__top-inner--active');


    });

    var mixer = mixitup('.portfolio__content');
});
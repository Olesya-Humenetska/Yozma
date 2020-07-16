$( document ).ready(function() {
        $('.technologiests-slider').slick({
            rows: 2,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        dots: false,
                        infinite: false,
                        speed: 300,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
         });
});

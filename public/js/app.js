$(function () {
    // Initialize AOS animations library
    AOS.init();

    //Initialize Rellax parallax animations library
    let rellax = new Rellax('.rellax');

    let carouselIndex = document.getElementsByClassName('carousel_index')[0].getAttribute('data');

    const tnsCarousel = document.querySelectorAll('.slider');
    tnsCarousel.forEach(slider => {
        ++carouselIndex;

        const tnsSlider = tns({
            container: slider,
            items: 3,
            slideBy: '1',
            autoplay: false,
            controls: true,
            prevButton: '#prev' + carouselIndex,
            nextButton: '#next' + carouselIndex,
            nav: false,
            gutter: 20,
              });
    });

});

$("#scroll_bottom").click(function(){
    let position = $(".flexbin").scrollTop();
    $(".flexbin").animate({
        scrollTop: position + 612
    }, 500);
});

$("#scroll_top").click(function(){
    let position = $(".flexbin").scrollTop();
    $(".flexbin").animate({
        scrollTop: position - 612
    }, 500);
});
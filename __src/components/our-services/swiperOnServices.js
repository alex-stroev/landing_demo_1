const swiperOnServices = () => {
    const swiper = new Swiper(".js-services-swiper", {
        direction: "horizontal",
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1.1,
                spaceBetween: 12,
            },
            360: {
                slidesPerView: 1.2,
                spaceBetween: 12,
            },
            520: {
                slidesPerView: 1.5,
                spaceBetween: 24,
            },
            800: {
                slidesPerView: 2,
                spaceBetween: 32,
            },
        },
    });
};

export { swiperOnServices };

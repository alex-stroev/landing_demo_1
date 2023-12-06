const swiperOnProjects = () => {
    const swiper = new Swiper(".js-projects-swiper", {
        direction: "horizontal",
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 24,
            },
            600: {
                slidesPerView: 2.2,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 3.2,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
    });
};

export { swiperOnProjects };

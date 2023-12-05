const gsapFeatures = () => {
    const items = gsap.utils.toArray(".feature");

    if (window.matchMedia("(max-width: 400px)").matches) {
        // mobile

        items.forEach((item) => {
            gsap.fromTo(
                item,
                {
                    scale: 0,
                },
                {
                    scale: 1,
                    autoAlpha: 1,
                    duration: 0.3,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: item,
                    },
                }
            );
        });
    } else {
        // desktop
        items &&
            gsap.fromTo(
                items,
                {
                    scale: 0,
                },
                {
                    scrollTrigger: ".features__grid",
                    duration: 0.5,
                    scale: 1,
                    autoAlpha: 1,
                    stagger: 0.3,
                    delay: 0.3,
                    ease: "back.out(1.7)",
                }
            );
    }
};

export { gsapFeatures };

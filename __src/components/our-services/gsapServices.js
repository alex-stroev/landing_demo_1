const gsapServices = () => {
    const tlDuration = 0.25;

    let tl = gsap.timeline({ scrollTrigger: { trigger: ".our-services__grid" } });
    tl.fromTo(
        ".our-services__preheader",
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: tlDuration, delay: tlDuration }
    );
    tl.fromTo(
        ".our-services__header",
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: tlDuration }
    );
    tl.fromTo(
        ".our-service",
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: tlDuration, stagger: tlDuration }
    );
};

export { gsapServices };

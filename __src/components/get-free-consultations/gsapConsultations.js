const gsapConsultations = () => {
    const tlDuration = 0.25;
    let tl = gsap.timeline({
        scrollTrigger: { trigger: ".get-free-consultations" },
    });
    tl.fromTo(
        ".get-free-consultations__cta",
        { scale: 0 },
        { scale: 1, duration: tlDuration, delay: 1 }
    );
    tl.fromTo(
        ".get-free-consultations__button",
        { x: "100%", autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: tlDuration }
    );
};

export { gsapConsultations };

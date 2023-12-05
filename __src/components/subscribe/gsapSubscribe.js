const gsapSubscribe = () => {
    const tlDuration = 0.25;
    let tl = gsap.timeline({
        scrollTrigger: { trigger: ".subscribe" },
    });
    tl.fromTo(
        ".subscribe__info",
        { scale: 0 },
        { scale: 1, duration: tlDuration, delay: 1 }
    );
    tl.fromTo(
        ".subscribe__button",
        { x: "100%", autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: tlDuration }
    );
};

export { gsapSubscribe };

const gsapAbout = () => {
    const tlDuration = 0.25;
    // if (window.matchMedia("(max-width: 400px)").matches) {
    //     //
    // } else {
    // }

    let tl = gsap.timeline({ scrollTrigger: { trigger: ".about" } });
    tl.fromTo(
        ".about__preheader",
        { scale: 0 },
        { scale: 1, duration: tlDuration, delay: 1 }
    );
    tl.fromTo(
        ".about__header",
        { x: "100%", autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: tlDuration }
    );
    tl.fromTo(".about__text", { scale: 0 }, { scale: 1, duration: tlDuration });
    tl.fromTo(
        ".about__button",
        { scale: 0 },
        { scale: 1, duration: tlDuration }
    );
    tl.fromTo(
        ".about-kv__pic1",
        { y: "-100%", rotation: "-720", autoAlpha: 0 },
        { y: 0, rotation: "0", autoAlpha: 1, duration: tlDuration * 2 }
    );
    tl.fromTo(
        ".about-kv__pic2",
        { y: "100%", rotation: "-720", autoAlpha: 0 },
        { y: 0, rotation: "0", autoAlpha: 1, duration: tlDuration * 3 }
    );
};

export { gsapAbout };

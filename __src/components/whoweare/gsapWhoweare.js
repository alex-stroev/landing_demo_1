const gsapWhoweare = () => {
    const tlDuration = 0.25;
    // if (window.matchMedia("(max-width: 400px)").matches) {
    //     //
    // } else {
    // }

    let tl = gsap.timeline({ scrollTrigger: { trigger: ".whoweare__kv" } });
    const from = { x: "100%", autoAlpha: 0 };
    const to = { x: 0, autoAlpha: 1, duration: tlDuration };

    tl.fromTo(".whoweare__preheader", from, { ...to, delay: 1 });
    tl.fromTo(".whoweare__header", from, to);
    tl.fromTo(".whoweare__text", from, to);
    tl.fromTo(
        ".whoweare-kv__man",
        { y: "-100%", autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: tlDuration * 2, ease: "bounce.out" }
    );
    tl.fromTo(
        ".whoweare-kv__badge",
        { y: "100%", autoAlpha: 0 },
        { y: "15.3%", autoAlpha: 1, duration: tlDuration * 2, ease: "bounce.out" }
    );
};

export { gsapWhoweare };

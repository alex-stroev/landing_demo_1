const gsapWhoweare = () => {
    const tlDuration = 0.25;

    let tl = gsap.timeline({ scrollTrigger: { trigger: ".whoweare__kv" } });

    const from = { x: "100%", autoAlpha: 0 };
    const to = { x: 0, autoAlpha: 1, duration: tlDuration };

    const toggleWidth = "(max-width: 1024px)";
    const textDelay = window.matchMedia(toggleWidth).matches ? 0 : 1;

    let tlText = gsap.timeline();
    tlText.fromTo(".whoweare__preheader", from, { ...to, delay: textDelay });
    tlText.fromTo(".whoweare__header", from, to);
    tlText.fromTo(".whoweare__text", from, to);

    let tlPics = gsap.timeline();
    tlPics.fromTo(
        ".whoweare-kv__man",
        { y: "-100%", autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: tlDuration * 2, ease: "bounce.out" }
    );
    tlPics.fromTo(
        ".whoweare-kv__badge",
        { y: "100%", autoAlpha: 0 },
        {
            y: "15.3%",
            autoAlpha: 1,
            duration: tlDuration * 2,
            ease: "bounce.out",
        }
    );

    if (window.matchMedia(toggleWidth).matches) {
        tl.add(tlPics).add(tlText);
    } else {
        tl.add(tlText).add(tlPics);
    }
};

export { gsapWhoweare };

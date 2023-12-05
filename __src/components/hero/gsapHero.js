const gsapHero = () => {
    let tl = gsap
        .timeline
        // { repeat: 2, repeatDelay: 1 }
        ();
    tl.fromTo(".hero__header", { x: "-100%" }, { x: 0, duration: 0.5 });
    tl.fromTo(".hero__text", { scale: 0 }, { scale: 1, duration: 0.25 });
    tl.fromTo(".hero__button", { scale: 0 }, { scale: 1, duration: 0.25 });
    // tl.fromTo(".hero__pic", { x: "50vw" }, { x: 0, duration: .25 });
};

export { gsapHero };

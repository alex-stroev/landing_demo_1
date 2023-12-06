const gsapTeamMembers = () => {
    const items = gsap.utils.toArray(".team-member");

    if (window.matchMedia("(max-width: 768px)").matches) {
        // mobile view

        items.forEach((item) => {
            gsap.fromTo(
                item,
                {
                    autoAlpha: 0,
                    y: "100%",
                },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.3,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: item.closest(".team-members__grid-item"),
                    },
                }
            );
        });
    } else {
        // desktop view
        items &&
            gsap.fromTo(
                items,
                {
                    autoAlpha: 0,
                    y: "100%",
                },
                {
                    scrollTrigger: ".team-members__grid",
                    duration: 0.5,
                    y: 0,
                    autoAlpha: 1,
                    stagger: 0.3,
                    // delay: 1,
                    ease: "back.out(1.7)",
                }
            );
    }
};

export { gsapTeamMembers };

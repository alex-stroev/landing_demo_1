const gsapTeamMembers = () => {
    const teamMembers = gsap.utils.toArray(".team-member");

    if (window.matchMedia("(max-width: 768px)").matches) {
        // mobile view

        teamMembers.forEach((member) => {
            gsap.fromTo(
                member,
                {
                    y: "100%",
                },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.1,
                    scrollTrigger: {
                        trigger: member,
                    },
                }
            );
        });
    } else {
        // desktop view
        teamMembers &&
            gsap.fromTo(
                teamMembers,
                {
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

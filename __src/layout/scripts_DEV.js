// $(document).ready(function () {
//     console.log("loaded");
//     /////////////////////////////////// end ready
// });
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

import { fixHeader } from "../components/header/fixHeader";
fixHeader(".js-mainheader");

const anchorLinks = document.querySelectorAll(".header__menu a");
anchorLinks.forEach((item) => item.addEventListener("click", scroll2anchor));

function scroll2anchor(e) {
    e.preventDefault();
    const aim = e.target.getAttribute("href");
    gsap.to(window, { duration: 1, scrollTo: { y: aim, offsetY: 60 } });
}

import { gsapTeamMembers } from "../components/team-members/gsapTeamMembers";
gsapTeamMembers();

// $(document).ready(function () {
//     console.log("loaded");
//     /////////////////////////////////// end ready
// });
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

import { fixHeader } from "../components/header/fixHeader";
fixHeader();

import { highlightAnchorLinks } from "../components/header/highlightAnchorLinks";
highlightAnchorLinks();

const anchorLinks = document.querySelectorAll(".header__menu a");
anchorLinks.forEach((item) => item.addEventListener("click", scroll2anchor));

function scroll2anchor(e) {
    e.preventDefault();
    const aim = e.target.getAttribute("href");
    gsap.to(window, { duration: 1, scrollTo: { y: aim, offsetY: 60 } });
    document.querySelector(".js-mainheader").classList.remove("i-open");
    document.querySelector(".js-hamburger").classList.remove("is-active");
}

import { gsapTeamMembers } from "../components/team-members/gsapTeamMembers";
gsapTeamMembers();

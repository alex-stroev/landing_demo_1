// $(document).ready(function () {
//     console.log("loaded");
//     /////////////////////////////////// end ready
// });
gsap.registerPlugin(ScrollTrigger);

import { fixHeader } from "../components/header/fixHeader";
// fixHeader(".js-mainheader");

let header = document.querySelector(".js-mainheader");
let hamburger = document.querySelector(".js-hamburger");
hamburger.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("is-active");
    header.classList.toggle("i-open");
});

import { gsapTeamMembers } from "../components/team-members/gsapTeamMembers";
gsapTeamMembers();

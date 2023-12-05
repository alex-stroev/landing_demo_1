// $(document).ready(function () {
//     console.log("loaded");
//     /////////////////////////////////// end ready
// });
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import { fixHeader } from "../components/header/fixHeader";
fixHeader();

import { highlightAnchorLinks } from "../components/header/highlightAnchorLinks";
highlightAnchorLinks();

import { gsapHero } from "../components/hero/gsapHero";
gsapHero();

import { gsapFeatures } from "../components/features/gsapFeatures";
gsapFeatures();

import { gsapAbout } from "../components/about/gsapAbout.js";
gsapAbout();

import { gsapServices } from "../components/our-services/gsapServices.js";
gsapServices();

import { gsapWhoweare } from "../components/whoweare/gsapWhoweare.js";
gsapWhoweare();

import { gsapConsultations } from "../components/get-free-consultations/gsapConsultations.js";
gsapConsultations();
/////////////////////////////////////////////////////////

const anchorLinks = document.querySelectorAll(".header__menu a");
anchorLinks.forEach((item) => item.addEventListener("click", scroll2anchor));

function scroll2anchor(e) {
    // Проверяем, не активна ли первая ссылка, в зависимости от этого выбираем verticalOffset
    const verticalOffset = document
        .querySelector(".header__menu a[href='#home']")
        .classList.contains("i-active")
        ? 180
        : 97;

    e.preventDefault();
    const aim = e.target.getAttribute("href");
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: aim, offsetY: verticalOffset },
    });
    document.querySelector(".js-mainheader").classList.remove("i-open");
    document.querySelector(".js-hamburger").classList.remove("is-active");
}

/////////////////////////////////////////////////////////

import { gsapTeamMembers } from "../components/team-members/gsapTeamMembers";
gsapTeamMembers();

import { gsapSubscribe } from "../components/subscribe/gsapSubscribe.js";
gsapSubscribe();

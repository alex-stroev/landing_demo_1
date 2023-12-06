// $(document).ready(function () {
//     console.log("loaded");
//     /////////////////////////////////// end ready
// });
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import { fixHeader } from "../components/header/fixHeader";
fixHeader();

import { highlightAnchorLinks } from "../components/header/highlightAnchorLinks";
highlightAnchorLinks();

import { handleAnchorLinks } from "../components/header/handleAnchorLinks.js";
handleAnchorLinks();

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

import { swiperOnProjects } from "../components/projects/swiperOnProjects.js";
swiperOnProjects();

import { gsapConsultations } from "../components/get-free-consultations/gsapConsultations.js";
gsapConsultations();

import { gsapTeamMembers } from "../components/team-members/gsapTeamMembers";
gsapTeamMembers();

import { gsapSubscribe } from "../components/subscribe/gsapSubscribe.js";
gsapSubscribe();

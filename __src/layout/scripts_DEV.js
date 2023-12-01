// $(document).ready(function () {
//     console.log("loaded");
//     /////////////////////////////////// end ready
// });
gsap.registerPlugin(ScrollTrigger);

import { fixHeader } from "../components/header/fixHeader";
// fixHeader(".js-mainheader");

import { gsapTeamMembers } from "../components/team-members/gsapTeamMembers";
gsapTeamMembers();

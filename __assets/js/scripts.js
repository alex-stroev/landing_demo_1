!function(){"use strict";var e=[,function(e,t,r){function o(e,t="i-fixed",r=20){console.log(e);let o=document.querySelectorAll(e);if(o.length){o=o[0];const e=o.nextElementSibling,n=()=>{console.log(o.offsetTop),window.scrollY>o.offsetHeight?(o.classList.add(t),e.style.paddingTop=o.offsetHeight+r+"px"):(o.classList.remove(t),e.style.paddingTop="")};n(),window.addEventListener("scroll",n)}}r.r(t),r.d(t,{fixHeader:function(){return o}})},function(e,t,r){r.r(t),r.d(t,{gsapTeamMembers:function(){return o}});const o=()=>{const e=gsap.utils.toArray(".team-member");console.log(e),window.matchMedia("(max-width: 768px)").matches?e.forEach((e=>{gsap.fromTo(e,{y:"100%"},{y:0,autoAlpha:1,duration:.1,scrollTrigger:{trigger:e}})})):e&&gsap.fromTo(e,{y:"100%"},{scrollTrigger:".team-members__grid",duration:.5,y:0,autoAlpha:1,stagger:.3,ease:"back.out(1.7)"})}}],t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){r.r(o);r(1);var e=r(2);gsap.registerPlugin(ScrollTrigger);let t=document.querySelector(".js-mainheader");document.querySelector(".js-hamburger").addEventListener("click",(e=>{e.currentTarget.classList.toggle("is-active"),t.classList.toggle("i-open")})),(0,e.gsapTeamMembers)()}()}();
// ==UserScript==
// @name     sme.sk - adblock blocker
// @version  1
// @grant    none
// @include http://*.sme.sk/*
// @include https://*.sme.sk/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// ==/UserScript==

$(function () {
  "use strict";
    console.log("!!!!!12345********************************************************************Ready!!!");

  setTimeout(function() {
    $(".tp-modal").hide();
  	$(".tp-backdrop").hide();
  	$("body").removeClass("tp-modal-open");
    console.log("RemovedAdBlockerBlocker");
  }, 5000);
});

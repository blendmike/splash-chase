!function(){"use strict";angular.module("SampleApp",["ngRoute","ngAnimate"]).config(["$locationProvider","$routeProvider",function(e,n){e.hashPrefix("!"),n.when("/",{templateUrl:"./partials/splash-page.html",controller:"MainController"}).otherwise({redirectTo:"/"})}]),angular.module("SampleApp").controller("MainController",["$scope","$location",function(e,n){function o(){if(classie.has(r,"open")){classie.remove(r,"open"),classie.remove(i,"overlay-open"),classie.add(i,"overlay-close"),classie.add(r,"close");var e=function(n){if(c.transitions){if("visibility"!==n.propertyName)return;this.removeEventListener(l,e)}classie.remove(r,"close")};c.transitions?r.addEventListener(l,e):e()}else classie.has(r,"close")||(classie.remove(i,"overlay-close"),classie.add(r,"open"),classie.add(i,"overlay-open"))}var i=document.querySelector("div.container"),t=document.getElementById("trigger-overlay"),r=document.querySelector("div.overlay"),a=r.querySelector("button.overlay-close"),s={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},l=s[Modernizr.prefixed("transition")],c={transitions:Modernizr.csstransitions};t.addEventListener("click",o),a.addEventListener("click",o),console.log("width: "+$(window).width()),console.log("height: "+$(window).height()),e.apply=function(){n.path("/apply")},e.transfer=function(){n.path("/transfer")},e.overlay=function(){$(".overlay").toggleClass("on"),$(".application-start").toggleClass("on")}}])}();

//  Author : Krupesh M. Anadkat
//  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify or merge 
// The above copyright notice and this permission notice must be included in all copies or substantial portions of the Software.

// Removal of above Notice is considered as violation of permission of use!
function hide_on_scroll(t){if("object"!=typeof t||void 0===t.nav_id)throw new TypeError("Argument must be an Object, also confirm NavId");var n=t.nav_id,e=t.nav_offset?t.nav_offset:200,i=t.nav_position?t.nav_position:"top",o=!!t.hide_onscroll_mobile,s=t.mobile_width?t.mobile_width:576;i=i.toLowerCase();var r=document.getElementById(n);if(null==r)throw new TypeError("Recheck Passed Navigation Id");var a=r.offsetHeight,l=document.createElement("style");l.type="text/css",l.innerHTML=".nav-scroll-up{-webkit-transform: translateY(-"+a+"px);-ms-transform: translateY(-"+a+"px);transform: translateY(-"+a+"px);}.nav-scroll-down{-webkit-transform: translateY("+a+"px);-ms-transform: translateY("+a+"px);transform: translateY("+a+"px);}.nav-scroll-fixed-"+i+"{position: fixed;"+i+": 0;right: 0;left: 0;z-index: 1000;}.nav-scroll-transition{will-change: transform; -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.5, 0, 0.25, 1);transition: -webkit-transform 0.5s cubic-bezier(0.5, 0, 0.25, 1);-o-transition: transform 0.5s cubic-bezier(0.5, 0, 0.25, 1);transition: transform 0.5s cubic-bezier(0.5, 0, 0.25, 1);transition: transform 0.5s cubic-bezier(0.5, 0, 0.25, 1), -webkit-transform 0.5s cubic-bezier(0.5, 0, 0.25, 1);}",document.getElementsByTagName("head")[0].appendChild(l),r.classList.add("nav-scroll-transition"),r.classList.add("nav-scroll-fixed-"+i);var c=0,d=0,m="top"===i?"nav-scroll-up":"nav-scroll-down",f=Math.max(document.documentElement.clientWidth,window.innerWidth||0);window.onresize=function(){f=Math.max(document.documentElement.clientWidth,window.innerWidth||0)},window.onscroll=function(){if(0==o&&f<=s)r.classList.contains(m)&&r.classList.remove(m);else{var t=window.scrollY;c<(d=t)&&t>2*e?r.classList.add(m):c>d&&!(t<=e)&&r.classList.remove(m),c=d}}}
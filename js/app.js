import{s as e,l as t}from"./actions-3793e399.js";function o({cookiePreference:e}){"accepts"===e&&t()}document.body.classList.remove("unresolved"),matchMedia("(prefers-reduced-motion)").matches&&document.querySelectorAll("video[autoplay]").forEach((e=>{e.removeAttribute("autoplay"),e.setAttribute("controls","")})),e.subscribe(o),o(e.getState()),function(){if("serviceWorker"in navigator)navigator.serviceWorker.getRegistrations().then((e=>Promise.all(e.map((e=>e.unregister()))))).then((e=>{e.length&&window.location.reload()}))}();
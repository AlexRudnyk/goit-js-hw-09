const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.setAttribute("disabled","disabled"),d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(d),t.removeAttribute("disabled","disabled")}));let d=null;
//# sourceMappingURL=01-color-switcher.2254c201.js.map
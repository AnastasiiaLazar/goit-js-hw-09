!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),bodyEl:document.querySelector("body")},e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((function(){t.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.startBtn.setAttribute("disabled",!0)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.af98a643.js.map

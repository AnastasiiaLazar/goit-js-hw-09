const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    bodyEl: document.querySelector("body"),
};

refs.startBtn.addEventListener('click', () => {
    bgChangeId = setInterval(() => {
        changeColor()
    }, 1000);
    refs.startBtn.setAttribute('disabled', true);
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(bgChangeId);
    refs.startBtn.removeAttribute('disabled');
})

function changeColor() {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
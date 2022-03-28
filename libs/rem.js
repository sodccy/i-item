function setRem() {
    var clientWidth = window.innerWidth;
    var nowRem = (clientWidth / 375 * 50);
    var html = document.querySelector('html')
    html.style.fontSize = parseInt(nowRem, 10) + 'px'
};
setRem();
var timer;
window.onresize = () => {
    clearTimeout(timer)
    timer = setTimeout(function() {
        setRem();
    }, 100)
}
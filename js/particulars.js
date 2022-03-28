var tabList = document.querySelectorAll('.tablist a')
var listBg = document.querySelector('.imgs div:nth-child(4)')
tabList[0].style.backgroundImage = `url(../images/particulars/tab${1}-active.png)`
for (let i in tabList) {
    tabList[i].onclick = function() {
        this.style.backgroundImage = `url(../images/particulars/tab${Number(i)+1}-active.png)`
        if (i == 1) {
            this.parentNode.children[2].style.backgroundImage = ''
            this.parentNode.children[0].style.backgroundImage = ''
            listBg.style.backgroundImage = `url(../images/particulars/tab${Number(i)+1}.png)`
            listBg.style.height = '14.87rem'
        } else if (i == 2) {
            this.parentNode.children[1].style.backgroundImage = ''
            this.parentNode.children[0].style.backgroundImage = ''
            listBg.style.backgroundImage = `url(../images/particulars/tab${Number(i)+1}.png)`
            listBg.style.height = '14.46rem'
        } else if (i == 0) {
            listBg.style.height = '17rem'
            this.parentNode.children[2].style.backgroundImage = ''
            this.parentNode.children[1].style.backgroundImage = ''
            listBg.style.backgroundImage = `url(../images/particulars/tab${Number(i)+1}.png)`
        }
    }
}
jeDate("#show01", {
    isShow: false,
    format: "YYYY-MM-DD hh:mm:ss"
});
var total = document.querySelector('.m-count')
var priceP = document.querySelector('.price-p span')
priceP.innerText = `${new Date().getDate()}00`
var das = document.getElementById('show01')
var num
    // das.onclick = function(e) {
    //     e = e || window.event
    //     e.stopPropagation()
    //     console.log(e.target.innerHTML * 100);
    //     priceP.innerText = (e.target.innerHTML * 100)
    //     reduceP.nextElementSibling.value = 1
    //     addP.previousElementSibling.value = 1
    //     num = e.target.innerHTML * 100
    // }
var reduceP = document.querySelector('.reduce-p')
var addP = document.querySelector('.add-p')
reduceP.onclick = function() {
    if (this.nextElementSibling.value > 1) {
        this.nextElementSibling.value--
            priceP.innerText = num * this.nextElementSibling.value
    } else {
        this.nextElementSibling.value = 1
    }
}
addP.onclick = function() {
    this.previousElementSibling.value++
        priceP.innerText = num * this.previousElementSibling.value
}

das.onclick = function(e) {
    var e = e || window.event
    e.stopPropagation()
    priceP.innerText = (e.target.innerText * 100)
    total.innerText = (e.target.innerText * 100)
    reduceP.nextElementSibling.value = 1
    addP.previousElementSibling.value = 1
    num = e.target.innerText * 100
}
total.innerHTML = `${new Date().getDate()}00`
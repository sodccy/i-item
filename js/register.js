var telReg = /^[1][345678][\d]{9}$/
var telInput = document.querySelector('.tel input')
var codeInput = document.querySelector('.code input')
var pswReg = /[0-9A-z]{6,12}/
var reget = document.querySelector('#reget')
var num = 60

function getCode() {
    if (telReg.test(telInput.value)) {
        telInput.style.border = '.02rem solid #0f0'
        codeInput.value = `${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}`
        var timer = setInterval(function() {
            if (set.firstChild.innerHTML > 0) {
                set.firstChild.innerHTML--
            } else {
                set.firstChild.innerHTML = 0
                clearInterval(timer)
                reget.onclick = function() {
                    codeInput.value = `${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}${Math.round(Math.random()*9)}`
                    var timer1 = setInterval(function() {
                        set.firstChild.innerHTML = num
                        if (set.firstChild.innerHTML > 0) {
                            num--
                        } else {
                            clearInterval(timer1)
                        }
                    }, 1000)
                }

            }
        }, 1000)
    } else {
        telInput.style.border = '.02rem solid #f00'
    }
}
var set = document.getElementById('set')
var gCode = document.getElementById('getCode')
gCode.onclick = getCode

function psw() {
    if (pswReg.test(this.value) && telReg.test(telInput.value)) {
        this.style.border = '.02rem solid #0f0'
    } else {
        this.style.border = '.02rem solid #f00'
    }
}
var gPsw = document.querySelector('.psw input')
gPsw.oninput = psw

function closePassword() {
    this.previousElementSibling.value = ''
}
var aTel = document.querySelector('.tel a')
aTel.onclick = closePassword
var aPsw = document.querySelector('.psw a')
aPsw.onclick = closePassword
var getPsw = document.querySelector('.psw .getPsw')
getPsw.onclick = function() {
    gPsw.type = 'text'
}
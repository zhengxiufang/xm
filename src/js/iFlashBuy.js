var hour = document.getElementById("hour")
var minute = document.getElementById("min")
var sec = document.getElementById("sec")

var second = 35611


function timeOut() {

    var hours = Math.floor(second / 3600)
    hours = hours < 10 ? "0" + hours : hours

    var minutes = Math.floor((second - hours * 3600) / 60)
    minutes = minutes < 10 ? "0" + minutes : minutes

    var seconds = second - hours * 3600 - minutes * 60
    seconds = seconds < 10 ? "0" + seconds : seconds

    hour.innerText = hours
    minute.innerText = minutes
    sec.innerText = seconds
}
var timer = setInterval(function () {
    second -= 1
    if (second < 0) {
        clearInterval(timer)
        timer = null
        return
    }
    timeOut()
}, 1000)


var left = document.getElementById("turn-left")
var right = document.getElementById("turn-right")
var idx = 0
left.onmousedown = function (e) {
    if (idx <= 0) {
        return
    }
    idx -= 1
    var menu = document.querySelector(".buy-bottom>#buy-right")
    menu.style.transform = "translateX(" + idx * -1005 + "px)"
}
right.onmousedown = function (e) {
    console.log(idx)
    if (idx > 1) {
        return
    }
    idx += 1    
    var menu = document.querySelector(".buy-bottom>#buy-right")
    menu.style.transform = "translateX(" + idx * -1005 + "px)"
}
setInterval(function(){
    if (idx > 1) {
        idx = -1
    }
    idx += 1    
    var menu = document.querySelector(".buy-bottom>#buy-right")
    menu.style.transform = "translateX(" + idx * -1005 + "px)"
},5000)
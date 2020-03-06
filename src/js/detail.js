let detailObj = JSON.parse(localStorage.getItem('info'))
if (!detailObj) {
    alert('该页面不存在')
    window.location.href = '../pages/list.html'
}
// 渲染数据
let strImg = `<img class="my-foto" src="${detailObj.image}"  data-large="${detailObj.image}" title="Фото">
<div class="my-container"></div>  `

$('.imgs').html(strImg)

let strMess1 = `
<li>${detailObj.name.split(' ')[0]}</li>
<li>${detailObj.desc}本礼品装包含：米家多功能网关*1、米家智能插座（Zigbee版)*1、米家无线开关*1、米家人体传感器*1、米家门窗传感器*1</li>
<li>小米自营</li>
<li>${detailObj.price}元</li>`
$('.mess1').html(strMess1)


let strMess2 = `<li>${detailObj.name}</li>
<li>${detailObj.price}元</li>
<ol>总计${detailObj.price}元</ol>`
$('.mess2').html(strMess2)

// 放大镜
jQuery(function () {

    $(".my-foto").imagezoomsl({

        descarea: ".my-container",
        zoomrange: [1, 5],
        magnifiereffectanimate: "fadeIn",
        magnifierborder: "none"
    });
});

// 加入购物车

// 更改本地数据localstorage就是 更改 arrCar数组中的值

// 判断本地数据是否有内容  确定 arrCar 数组中的内容


let carJson = localStorage.getItem('car')
let arrCar = null
if (carJson) {
    arrCar = JSON.parse(carJson)
} else {
    arrCar = []
}


$('.addcar').click(function () {
    if (!document.cookie) {
        alert('请先登录')
        window.location.href='../pages/login.html'
    } else {
        let id = detailObj.product_id
        let objCar = { ...detailObj }

        // 判断 数组arrCar中 有无该商品  
        // 若没有在数组arrCar中添加 并添加num数量属性 属性值为 1
        // 若有  则让该商品num数量属性值加1 num++
        let jsondel = arrCar.find(v => v.product_id == id)

        if (jsondel) {
            jsondel.num++
        } else {
            objCar.num = 1
            objCar.isSelect=false
            arrCar.push(objCar)
        }


        localStorage.setItem('car', JSON.stringify(arrCar))
        alert('成功加入购物车')
        location.reload()
    }

})
var origindata ={
	"type": "家电",
	"english":"homeelec",
	"num":[
		{
			"index":"热门",
			"href":"#"
		},
		{
			"index":"电视影音",
			"href":"#"
		}
	],
	"leftImg":[
		{
			"url":"https://item.mi.com/1190800041.html",
			"imgSrc":"../images/xmad_15407948090121_sNfyZ.jpg"
		},
		{
			"url":"https://item.mi.com/1190800041.html",
			"imgSrc":"../images/xmad_15453810333749_hDsXv.jpg"
		}

	],
	"info":[
		{
			// 热门
			"index":0,
			"name":"热门",
			"contents":[
				{
					"oneUrl":"#",
					"orNew":"新品",
					"imgSrc":"../images/remen1.jpg",
					"phoneName":"小米壁挂电视 65英寸",
					"introduce":"",
					"price":"6999",
					"delPrice":"10000元",

					"comment":""
				},
				{
					"oneUrl":"#",
					"orNew":"新品",
					"imgSrc":"../images/remen2.png",
					"phoneName":"小米9 6GB+128GB",
					"introduce":"",
					"price":"2599",
					"delPrice":"2999元",
					"comment":"热门评论好不好，不买不知道，不买不知道评论好不好，不买不知道"

				},
				{
					"oneUrl":"#",
					"orNew":"新品",
					"imgSrc":"../images/remen3.png",
					"phoneName":"小米9 6GB+128GB",
					"introduce":"64位四核处理器 / 1GB+4GB大内存 ",
					"price":"799",
					"delPrice":"899元",
					"comment":"热门评论好不好，不买不知道，不买不知道评论好不好，不买不知道"

				},
				{
					"oneUrl":"#",
					"orNew":"",
					"imgSrc":"../images/remen4.jpg",
					"phoneName":"小米9 6GB+128GB",
					"introduce":"4K HDR / 人工智能语音",
					"price":"1799",
					"delPrice":"2099元",
					"comment":"热门评论好不好，不买不知道，不买不知道评论好不好，不买不知道"

				},
				{
					"oneUrl":"#",
					"orNew":"立减300元",
					"imgSrc":"../images/remen5.png",
					"phoneName":"小米9 6GB+128GB",
					"introduce":"",
					"price":"1299",
					"delPrice":"1499元",
					"comment":""

				},
				{
					"oneUrl":"#",
					"orNew":"",
					"imgSrc":"../images/remen6.jpg",
					"phoneName":"小米9 6GB+128GB",
					"introduce":"",
					"price":"3199",
					"delPrice":"3699元",
					"comment":"热门评论好不好，不买不知道，不买不知道评论好不好，不买不知道"

				},
				{
					"oneUrl":"#",
					"orNew":"",
					"imgSrc":"../images/remen7.png",
					"phoneName":"小米盒子4",
					"introduce":"",
					"price":"299",
					"delPrice":"",
					"comment":"热门评论好不好，不买不知道，不买不知道评论好不好，不买不知道"

				},
				// 小
				{
					"oneUrl":"#",
					"imgSrc":"../images/remen8.jpg",
					"phoneName":"小米净水机",
					"price":"199"
				},
				// 浏览更多
				{
					"oneUrl":"#",
					"imgSrc":"../images/右箭头.png"
				}
			]
		},
		{
			// 电视影音
			"index":1,
			"name":"电视影音",
			"contents":[
				{
					"oneUrl":"#",
					"orNew":"新品",
					"imgSrc":"../images/tv1.jpg",
					"phoneName":"小米壁挂电视 65英寸",
					"introduce":"",
					"price":"6999",
					"delPrice":"10000元",
					"comment":"电视影音评论好不好，不买不知道，不买不知道评论好不好，不买不知道"
				},
				{
					"oneUrl":"#",
					"orNew":"新品",
					"imgSrc":"../images/tv2.jpg",
					"phoneName":"小米9 6GB+128GB",
					"introduce":"",
					"price":"2599",
					"delPrice":"2999元",
					"comment":"电视影音评论好不好，不买不知道，不买不知道评论好不好，不买不知道"
		
				},
				{
					"oneUrl":"#",
					"orNew":"立减300元",
					"imgSrc":"../images/tv3.jpg",
					"phoneName":"小米9 6GB+128GB",
					"introduce":"64位四核处理器 / 1GB+4GB大内存 ",
					"price":"799",
					"delPrice":"899元",
					"comment":""
				},
				{
					"oneUrl":"#",
					"orNew":"立减300元",
					"imgSrc":"../images/tv4.jpg",
					"phoneName":"小米9 6GB+128GB",
					"introduce":"4K HDR / 人工智能语音",
					"price":"1799",
					"delPrice":"2099元",
					"comment":""
				},
				{
					"oneUrl":"#",
					"orNew":"立减300元",
					"imgSrc":"../images/tv5.jpg",
					"phoneName":"小米9 6GB+128GB",
					"introduce":"",
					"price":"1299",
					"delPrice":"1499元",
					"comment":"电视影音评论好不好，不买不知道，不买不知道评论好不好，不买不知道"
				},
				{
					"oneUrl":"#",
					"orNew":"立减300元",
					"imgSrc":"../images/tv6.jpg",
					"phoneName":"小米9 6GB+128GB",
					"introduce":"",
					"price":"3199",
					"delPrice":"3699元",
					"comment":"电视影音评论好不好，不买不知道，不买不知道评论好不好，不买不知道"
				},
				{
					"oneUrl":"#",
					"orNew":"",
					"imgSrc":"../images/tv7.jpg",
					"phoneName":"小米盒子4",
					"introduce":"",
					"price":"299",
					"delPrice":"",
					"comment":"电视影音评论好不好，不买不知道，不买不知道评论好不好，不买不知道"
				},
				// 小
				{
					"oneUrl":"#",
					"imgSrc":"../images/tv8.jpg",
					"phoneName":"小米盒子4c",
					"price":"199"
				},
				// 浏览更多
				{
					"oneUrl":"#",
					"imgSrc":"../images/右箭头.png"
				}
			]
		}

	]
}


var leftImg = originData.leftImg

for (var i of leftImg) {
    var img = document.createElement("img")
    img.src = i.imgSrc
    document.querySelector(".home-left").appendChild(img)
}

// var num = originData.num

// var p1 = document.createElement("p")
// p1.innerText = "热门"
// document.querySelector(".nav").appendChild(p1)

// var p2 = document.createElement("p")
// p2.innerText = "出行"
// document.querySelector(".nav").appendChild(p2)
show(0)

function show(canshu) {
    var info = originData.info
    for (var idx in info) {
        var p = document.createElement("p")
        p.innerText = info[idx].name
        document.querySelector(".home-nav").appendChild(p)
        p.index_home = idx
        test(canshu, info)
        p.onmouseenter = function(e) {
            test(e.target.index_home, info)
        }
    }

}

function test(temp, info) {
    document.querySelector(".home-right").innerHTML = ""
    var content = info[temp].contents

    for (var j in content) {

        var obj = content[j]

        if (j <= content.length - 3) {

            var section = document.createElement("section")
            section.className = "item4"
            document.querySelector(".home-right").appendChild(section)


            var img = document.createElement("img")
            img.src = obj.imgSrc
            section.appendChild(img)
            img.id = "home-left"

            var p1 = document.createElement("p")
            p1.innerText = obj.phoneName
            section.appendChild(p1)

            var p2 = document.createElement("p")
            p2.innerText = obj.introduce
            p2.style.width = "150px"
            section.appendChild(p2)

            var p3 = document.createElement("p")
            p3.innerText = obj.price + "元" + " "
            section.appendChild(p3)

            var del_price =document.createElement("del")
            del_price.innerText = obj.delPrice+"元"
            del_price.style.fontSize = "12px"
            del_price.style.color = "grey"
            p3.appendChild(del_price)

        }
    }


    var sections = document.createElement("section")
    sections.className = "last"
    document.querySelector(".home-right").appendChild(sections)

    var secData = content[content.length - 2]

    var divs = document.createElement("div")
    divs.className = "top"
    sections.appendChild(divs)

    var div = document.createElement("div")
    div.className = "top-left"
    divs.appendChild(div)

    var p4 = document.createElement("p")
    p4.innerText = secData.phoneName
    div.appendChild(p4)

    var p5 = document.createElement("p")
    p5.innerText = secData.price + "元"
    div.appendChild(p5)

    var img1 = document.createElement("img")
    img1.src = secData.imgSrc
    divs.appendChild(img1)

    var lastData = content[content.length - 1]

    var divB = document.createElement("div")
    divB.className = "bottom"
    sections.appendChild(divB)

    var divLeft = document.createElement("div")
    divLeft.className = "bottom-left"
    divB.appendChild(divLeft)

    var p6 = document.createElement("p")
    p6.innerText = "浏览更多"
    divLeft.appendChild(p6)
    p6.style.marginBottom = "0"

    var p7 = document.createElement("p")
    p7.innerText = info[temp].name
    divLeft.appendChild(p7)
    p7.style.marginTop = "0"

    var img2 = document.createElement("img")
    img2.src = lastData.imgSrc
    divB.appendChild(img2)
}
$('.select').click(()=>{
    window.location.href='../pages/list.html'
    console.log(1)
})

// 顶部导航
getTopleft()

function getTopleft() {
    $.ajax({
        url: '../lib/topleft.json',
        dataType: 'json',
        success: function (res) {

            let str = ''
            res.forEach(item => {
                str += `
                <li><a href="../pages/list.html" target='_blank'>${item.name}</a></li>
                <li class="topleft_">|</li>
                `
            });
            $('.topleft').html(str)

            $('.topleft').children('li').eq(0).click(() => window.location.href = '../pages/index.html')

            // 顶部导航下拉菜单
            $('.topleft li').eq(18).attr('class', 'navapp').html('<span></span><a href="../pages/list.html" target="_blank">下载app</a><p><img src="../images/indeximages/navapp.png" alt=""></p>')
        }
    })
}

getTopright()

function getTopright() {
    $.ajax({
        url: '../lib/topright.json',
        dataType: 'json',
        success: function (res) {

            let str = ''
            res.forEach(item => {
                str += `
                    <li><a href="${item.href}" >${item.name}</a></li>
                    <li class="topleft_">|</li>
                    `
            });

            let arr = JSON.parse(localStorage.getItem('car'))
            let num = 0
            if (!arr) {

            } else {
                arr.forEach(item => {
                    num += item.num
                })
            }

            // // 购物车按钮
            $('.topright').html(str + `<div class="topcar"><span class="glyphicon glyphicon-shopping-cart"></span><p>购物车(${num})</p></div>`)

            $('.topcar p').click(() => window.location.href = '../pages/cart.html')
            if (document.cookie) {
                $('.topright').children('li').eq(0).html('<a href="">已登录</a>')
            }
        }
    })
}

getNav()

function getNav() {
    $.ajax({
        url: '../lib/nav.json',
        dataType: 'json',
        success: function (res) {

            let str = ''
            res.forEach(item => {
                str += `
                <li><a href="../pages/list.html" target='_blank'>${item.name}</a></li>
                `
            });

            $('.navcenter').html(str) // 下拉菜单事件
                .on({
                    mouseenter: () => $('.selectwrap').stop().slideDown(),
                    mouseleave: () => $('.selectwrap').stop().slideUp(),
                })
                .children('li')         // 二级菜单渲染
                .on('mouseover', function () {
                    const index = $(this).index()
                    const list = res[index].list

                    let str = ''

                    list.forEach(item => {
                        str += ` <li>
                        <img src="${ item.list_url}" alt="">
                        <h2>${ item.list_name}</h2>
                        <h3>${ item.list_price}</h3>
                      </li>`
                    })

                    $('.select').html(str)

                    $('.selectwrap')
                        .on({
                            mouseover: function () { $(this).finish().show() },
                            mouseout: function () { $(this).finish().slideUp() }
                        })
                })
        }
    })
}
getSou()

function getSou() {
    $.ajax({
        url: '../lib/sou.json',
        dataType: 'json',
        success: function (res) {

            let str = ''
            res.forEach(item => {
                str += `
                <div class="p${item.id + 1}"><a href="../pages/list.html" target="_blank">${item.name}</a></div>
                `
            });

            str += $('.navright').html()
            $('.navright').html(str)

            $('.navr1').on('input', function () {
                $('.navright').children('div').css('display','none')
               
            })
        }
    })
}

// banner
// banner  图


getBannerNav()

function getBannerNav() {
    $.ajax({
        url: '../lib/bnav.json',
        dataType: 'json',
        success: function (res) {

            let str = ''

            res.forEach(item => {
                str += ` <li>${item.name}<span class="glyphicon glyphicon-chevron-right"></span></li>`
            })

            $('.bnav> ul')
                .html(str)
                .on({
                    mouseenter: () => $('.banbox').stop().show(),
                    mouseleave: () => $('.banbox').stop().hide(),
                })
                .children('li')
                .on('mouseover', function () {
                    const index = $(this).index()
                    const list = res[index].list

                    let str = ''
                    for (var i = 0; i < 2; i++) {
                        list.forEach(item => {
                            str += `<li>
                    <img src="${item.list_url}" alt="">
                    <a href="../pages/list.html">  <span>${ item.list_name}</span></a>
                  </li> `
                        })
                    }


                    $('.banbox > ul').html(str)

                    $('.banbox')
                        .on({
                            mouseover: function () { $(this).finish().show() },
                            mouseout: function () { $(this).finish().slideUp() }
                        })

                })
                $('.bnav li').click(() => {
                    window.location.href = '../pages/list.html'
                
                })
        }
    })
}

$('.box').on('mouseover', function () {
    $('.bnav').css('display', 'block')
})
$('.box').on('mouseleave', function () {
    $('.bnav').css('display', 'none')
})
$('.navbox').on('mouseleave', function () {
    $('.bnav').css('display', 'none')
})

// https://rec.www.mi.com/rec/search?jsonpcallback=jQuery111308884703793191748_1583226272615



// 底部
//底部


getLastop()

function getLastop() {
    $.ajax({
        url: '../lib/lastop.json',
        dataType: 'json',
        success: function (res) {

            let str = ''
            res.forEach(item => {
                str += `
                <li>
          <p><span class="${item.gly}"></span>${item.name}</p>
        </li>
                `
            });
            $('.lastop').html(str)


        }
    })
}


getLastleft()
function getLastleft() {
    $.ajax({
        url: '../lib/lastleft.json',
        dataType: 'json',
        success: function (res) {
            let str = ''
            res.forEach(item => {
                str += `<li>
                <p>${item.name}</p>`

                let list = item.list

                list.forEach(item2 => {
                    str += ` <ol>${item2.list_name}</ol>`
                })

                str += `</li>`
            })
            $('.lastleft').html(str)
        }
    })
}

// footer
getFootrli()
function getFootrli() {
    $.ajax({
        url: '../lib/topleft.json',
        dataType: 'json',
        success: function (res) {
            let str = ''
            res.forEach(item => {
                str += `  <ol>${item.name}</ol>`
            })
            $('.footrli').html(str)
        }
    })
}


// 请求列表数据
//  main_sort 0 综合 1 销量  2  价格升序  asc 

// 分页 刚开始时第一页
let currt = 1
let sort = 0
getList()

function getList(sort = 0, currt = 1) {
    $.ajax({
        url: 'https://api.search.mi.com/search',
        data: {
            query: '智能家庭',
            page_index: currt,
            page_size: 8,
            filter_tag: 0,
            main_sort: sort,
            sort_by: 'dsc',
            province_id: 2,
            city_id: 36,
        },
        dataType: 'jsonp',
        success: function (res) {

            // 渲染 商品列表
            let strList = ''
            let arrList = res.data.pc_list
            console.log(arrList)
            arrList.forEach(item => {
                strList += `
                <li data-id=${item.product_id}>
                <img src="${item.commodity_list[0].image}" alt="">
                <p>${item.commodity_list[0].name}</p>
                <p>${item.commodity_list[0].price}</p>
                <img src="${item.commodity_list[0].image}" alt="">
            </li>`
            })

            $('.list').html(strList)

            $('.list li').click(function () {
                // let obj = arrList[$(this).index()].commodity_list[0]
                // localStorage.setItem('info', JSON.stringify(obj))
                // window.location.href = '../pages/detail.html'
                console.log($(this).data('id'))
                const id=$(this).data('id')
                let obj=null
                for(let i = 0;i<$('.list li').length;i++){
                    if(arrList[i].product_id==id){
                        obj=arrList[i]
                        break
                    }
                }
                localStorage.setItem('info', JSON.stringify(obj.commodity_list[0]))
                window.location.href = '../pages/detail.html'
            })


        }
    })
}


// 点击按钮排序
$('.sort li').click(function () {
    $(this).css('color', '#f75000').siblings().css('color', '#333')
    sort = $(this).index()
    getList(sort, currt)
})

// 分页
$('.pagi').pagination({
    pageCount: 3, // 总页数
    current: 1, // 当前页
    jump: false,
    coping: true,
    homePage: '首页', // 首页按钮的文本
    endPage: '末页', // 末页按钮的文本
    callback: function (api) { // 当你切换页面的时候会触发
        // api.getCurrent() 获取当前是第几页
        currt = api.getCurrent()
        getList(sort, currt)
    }
})



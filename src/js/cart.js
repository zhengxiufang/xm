// 登录注册
if (document.cookie) {
    $('.login').html('已登录')
} else {
    alert('请先登录')
    window.location.href = '../pages/login.html'
    $('.login').click(() => {
        window.location.href = '../pages/login.html'
    })
}


$('.loginup').click(() => {
    window.location.href = '../pages/loginup.html'
})




// 获取商品数据
let arrCar = JSON.parse(localStorage.getItem('car'))


// 判断有没有数据
if (!arrCar) {
    alert('您的购物车空空如也，快去选购吧！')
} else {
    // 渲染页面 
    bindHtml()
    // 添加事件
    bindEvent()
}


// 渲染商品列表

function bindHtml() {
    // 整体渲染页面
    // 全选按钮需要渲染
    //   判断一下, 如果数组里面每一个数据的 isSelect 都是 true, 就渲染成 true
    //   只要有任意一个数组的 isSelect 是 false. 就渲染成 false
    //   有一个数组常用方法叫做 every
    let selectAll = arrCar.every(item => {
        // 如果每一条都是 true, 就会返回 true
        // 如果任意一条是 false, 就会返回 false
        return item.isSelect === true
    })


    let str = `<div class="cartop">
    <ul>
        <li>
            <input type="checkbox" class="selectAll" ${ selectAll ? 'checked' : ''}>
            <span>全选</span>
        </li>
        <li>商品名称</li>
        <li>单价</li>
        <li>数量</li>
        <li>小计</li>
        <li>操作</li>
    </ul>
</div>
<div class="cartmain">`



    arrCar.forEach(item => {
        str += `  <ul>
        <li>
            <input data-id="${item.product_id}" type="checkbox" class="select" ${item.isSelect ? 'checked' : ''}>
        </li>
        <li>
            <img src="${item.image}"
                alt="">
        </li>
        <li>
            <a href="../pages/detail.html">
                ${item.name}
            </a>
        </li>
        <li>${item.price}元</li>
        <li>
            <span data-id="${item.product_id}" class="delnum">
                <i class="glyphicon glyphicon-minus"></i>
            </span>
            <span class="carnum">${item.num}</span>
            <span data-id="${item.product_id}" class="addnum">
                <i class="glyphicon glyphicon-plus"></i>
            </span>
        </li>
        <li>${item.price * item.num}</li>
        <li>
            <span data-id="${item.product_id}" class="delall glyphicon glyphicon-remove"></span>
        </li>
    </ul>
    `
    });


    // 选中商品数量需要渲染
    //   要把数组中的 isSelect 为 true 的数据的 number 加再一起
    //   数组常用方法叫做 filter 就能筛选数据
    let selectArr = arrCar.filter(item => item.isSelect)

    // 选中商品数量计算
    let selectNumber = 0
    // 选中商品总价
    let selectPrice = 0
    selectArr.forEach(item => {
        selectNumber += item.num
        selectPrice += item.price * item.num
    })

    // 去支付要不要禁用, 如果没有选中的商品, 就应该禁用
    //   只要有选中的商品, 就应该不禁用
    //   直接使用 selectArr 的 length 来判断


    // 一共多少商品计算 
    let allnum = 0
    arrCar.forEach(item => {
        allnum += item.num
    })

    str += `  </div>
    <div class="cartbottom">
        <a href="../pages/list.html">继续购物</a>
        <span>
            共
            <i class="sum">${allnum}</i>
            件商品,已选择
            <i class="selnum">${selectNumber}</i>
            件
        </span>
        <div class="buy">
            去结算
        </div>
        <p>
            合计:
            <i class="priceSum">${selectPrice}</i>
            元
        </p>

    </div>`

    $('.cart').html(str)

}



// 添加事件
function bindEvent() {
    //增加按钮
    $('.cart').on('click', '.addnum', function () {
        const id = $(this).data('id')
        // 循环数组找到一个id 对应的数据
        arrCar.forEach(item => {
            if (item.product_id === id) {
                item.num++
            }
        })
        // 从新渲染页面
        bindHtml()
        // 在从新存储一遍 localStorage
        localStorage.setItem('car', JSON.stringify(arrCar))
    })

    // 减少按钮   
    $('.cart').on('click', '.delnum', function () {
        const id = $(this).data('id')
        // 循环数组找到一个id 对应的数据
        arrCar.forEach(item => {
            if (item.product_id === id) {
                item.num--
            }
        })
        // 从新渲染页面
        bindHtml()
        // 在从新存储一遍 localStorage
        localStorage.setItem('car', JSON.stringify(arrCar))
    })

    // 删除按钮
    $('.delall').click(function () {
        const id = $(this).data('id')
        arrCar = arrCar.filter(item => item.product_id != id)
        // 从新渲染页面
        bindHtml()
        // 在从新存储一遍 localStorage
        localStorage.setItem('car', JSON.stringify(arrCar))
    })


    // 全选
    $('.cart').on('change', '.selectAll', function () {
        // 自己的状态就是每一条数据的状态
        // 先获取自己的状态
        // console.log(this.checked)
        // 让数组里面的每一个数据的 isSelect 都变成 自己的状态
        arrCar.forEach(item => {
            item.isSelect = this.checked
        })
        // 从新使用这个数据去渲染一遍页面就可以了
        //   因为从新渲染页面了, 页面上的元素就变了, 是一套新的元素了
        //   就没有事件了, 因为页面回改变元素, 我们最好使用事件委托
        bindHtml()

        // 在从新存储一遍 localStorage
        localStorage.setItem('car', JSON.stringify(arrCar))
    })

    //单选
    $('.cart').on('change', '.select', function () {
        // console.log($(this).data('id'))
        // 你要知道你点击的是哪一个数据的单选按钮
        const id = $(this).data('id')

        // 找到数组中 id 一样的那一条数据改变一下 isSelect 属性
        arrCar.forEach(item => {
            if (item.product_id === id) {
                item.isSelect = !item.isSelect
            }
        })

        // 从新渲染页面
        bindHtml()

        // 从新存储到 lcoalStorage 里面
        localStorage.setItem('car', JSON.stringify(arrCar))
    })

    // 去结算清空   buy
    $('.cart').on('click', '.buy', function () {

        if ($('.selnum').html() == 0) {
            alert('请选择商品')
        } else {
            alert('结算成功,商品将在七日内送达!')
            
            // 删除选中商品
            arrCar=arrCar.filter(item=>item.isSelect==false)

            // 重新渲染页面
            bindHtml()

            // 重新存储到 lcoalStorage 里面
            localStorage.setItem('car', JSON.stringify(arrCar))
        }
    })
}













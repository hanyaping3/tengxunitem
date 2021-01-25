
//轮播图
let n = 0;	//代表当前在第几张
let liList = $("#imgwrap li")
let dofather = $("#dofather")[0]
let ul = $("#imgwrap")
for(let i=0;i<liList.length;i++){
    let dot =$("<li></li>")
    if (i === 0) { dot.addClass("focus") }
            $("#dofather").append(dot)
}
//点击小圆点
let dolist = $("#dofather li")
dolist.mouseenter(function () {
    //获取点击时的n
    n = $(this).index()
    imgchange()
})
function imgchange() {
    ul.animate({
        marginLeft: -(n * 1540)
    })
    dolist.removeClass("focus")
    dolist.eq(n).addClass("focus")
}



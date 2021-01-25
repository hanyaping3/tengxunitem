//监听，当鼠标划上隐藏菜单栏消失
$(".subnavshow").mouseenter(function(){
    $("#sub-nav").show()
    $(".subicon-change").attr("background","url(../img/xuebi1.png) -64px -2px")
})
$(".subnavshow").mouseleave(function(){
    $("#sub-nav").hide()
})
$("#sub-nav").mouseenter(function(){
    $("#sub-nav").show()
    $(".subicon-change").attr("background","url(../img/xuebi1.png) -64px -2px")
})
$("#sub-nav").mouseleave(function(){
    $("#sub-nav").hide()
})

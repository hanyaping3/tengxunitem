//监听，当鼠标划上隐藏菜单栏消失
$(".subnavshow").mouseenter(function(){
    $("#sub-nav").show()
    $(".subicon-change").attr("background-position","margin-left:25px")

})
$(".subnavshow").mouseleave(function(){
    $("#sub-nav").hide()
})
$("#sub-nav").mouseenter(function(){
    $("#sub-nav").show()
    $(".subicon-change").attr("background-position","margin-left:25px")
})
$("#sub-nav").mouseleave(function(){
    $("#sub-nav").hide()
})

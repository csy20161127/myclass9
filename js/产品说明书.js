var $con_wrap=$(".content")
var $a=$(".title ul li a");
$(".title ul li a").on("click",function(){
	console.log($(this).index(".a1"));
	$con_wrap.eq($(this).index(".a1")).addClass("active").siblings().removeClass("active");
	$(this).addClass("aActive").parent().siblings().find("a").removeClass("aActive");
})
var $contact=$(".contact img");
var $close=$(".close")
// 开或关闭固定导航栏
$contact.on("click",function(){
	console.log($(this).index(".contact img"));
	$(".fixedNav_cotent").removeClass("fixedNavChange");
	$(".fixedNav_cotent").eq($(this).index(".contact img")).addClass("fixedNavChange");
	$close.on("click",function(){
		$(this).parent().parent().removeClass("fixedNavChange");
	})
})
// 展开或关闭隐藏导航栏的小图标
var $nav_btn=$("#nav_btn img");
var $nav_content=$(" #nav_btn .nav ");
$nav_btn.on("click",function(){
	$nav_content.slideToggle();
})
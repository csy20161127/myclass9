var $span=$(".content span");
$span.on("click",function(){
	$(this).next().slideToggle();
	$(this).parent().siblings().find(".content_1").slideUp();
	$(this).find("img").toggleClass("img_change");
	$(this).parent().siblings().find("img").removeClass("img_change");
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
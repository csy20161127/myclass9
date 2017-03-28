// 第二导航点击事件
var $con_wrap=$(".content_wrap .con_wrap1")
var $a=$(".title ul li a");
$(".title ul li a").on("click",function(){
	console.log($(this).index(".a1"));
	$con_wrap.eq($(this).index(".a1")).addClass("active").siblings().removeClass("active");
	$(this).addClass("aActive").parent().siblings().find("a").removeClass("aActive");
})
// 展开或关闭隐藏导航栏的小图标
var $nav_btn=$("#nav_btn img");
var $nav_content=$(" #nav_btn .nav ");
$nav_btn.on("click",function(){
	$nav_content.slideToggle();
})
// 开或关闭固定导航栏
var $contact=$(".contact img");
var $close=$(".close")
$contact.on("click",function(){
	console.log($(this).index(".contact img"));
	$(".fixedNav_cotent").removeClass("fixedNavChange");
	$(".fixedNav_cotent").eq($(this).index(".contact img")).addClass("fixedNavChange");
	$close.on("click",function(){
		$(this).parent().parent().removeClass("fixedNavChange");
	})
})
// 悬浮事
// 添加事件	 
$(".con_wrap1>div>div").hover(
  	function (){
    	$(this).children().eq(1).attr("src","img/img1/bofang_02.png");
 	},
  	function (){
  		console.log($(this).index(".img"));
  		$(this).children().eq(1).attr("src","img/img1/bofang_01.png");
 	 }
);
// val $bol=false;
$(window).on("mousewheel DOMMouseScroll",function(e){
	// if($bol){
	// 	return;
	// }
	// $bol=true;
	// jquery 兼容的滚轮事件
	// 获取滚动的高度
    var e=e||window.event;
    scrollTop=$(document).scrollTop();
    var a=$(window).height();
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
    appearFn();
})
$returnTop=$(".returnTop");
appearFn();
// 返回顶部图标消失与出现
function appearFn(){
	scrollTop1=$(document).scrollTop();
	if(scrollTop1>0){
		$returnTop.css("display","block");
	}else{
		$returnTop.css("display","none");
	}
	if($returnTop.offset().top+$returnTop.height()+$(".footer_end").height()>$(document).height()){
		console.log("aaaa");
		console.log($returnTop.height());
		$returnTop.offset({
			"top":$(document).height()-$(".footer_end").height()-$returnTop.height()
		})
	}
	else{
		console.log("aaaaasddf");
		$returnTop.css({
			"top":"auto"
		})
	}	
}
$returnTop.on("click",function(){
	$("body,html").animate({
		"scrollTop":"0"
	},1000)
})
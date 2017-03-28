// 展开或关闭隐藏导航栏的小图标
var $nav_btn=$("#nav_btn img");
var $nav_content=$(" #nav_btn .nav ");
$nav_btn.on("click",function(){
	$nav_content.slideToggle();
})
// 滚到下一块
var nextBtn_wrap=$(".nextBtn_wrap img");
nextBtn_wrap.on("click",function(){
	$("body,html").animate({
		scrollTop:$(window).height()
	},1000);
})
// 展开或关闭固定导航栏
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
var scrollTop;
var bol=false;
$returnTop=$(".returnTop");
var scrollTop1;
appearFn();
mouseFn();
$(window).on("mousewheel DOMMouseScroll",function(e){
	if(bol){
		return;
	}
	bol=true;
	// jquery 兼容的滚轮事件
	// 获取滚动的高度
    var e=e||window.event;
    scrollTop=$(document).scrollTop();
    var a=$(window).height();
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
    if (delta > 0) {
    	
        // 向上滚
    	if(scrollTop>a&&scrollTop<a*2){
    		$returnTop.css("display","none");
    		scrollTop=a*2
    	}
    	if(scrollTop>a*2&&scrollTop<a*3){
    		scrollTop=a*3
   		}
    	if(scrollTop>a*3&&scrollTop<a*4){
    		scrollTop=a*4
   		}
   		if(scrollTop>a*4){
    		scrollTop=a*5
   		}
   		
        $("body,html").stop();
       	$("body,html").animate({
			"scrollTop":scrollTop-a+"px"
		},1000,function(){
			bol=false;
			downUpFn();
			leftFn();
			appearFn();
			
		});
    }else if (delta < 0) {
        // 向下滚
    	if(scrollTop<a){
    		scrollTop=0;
    	}
    	if(scrollTop>a&&scrollTop<a*2){
    		scrollTop=a
    	}
    	if(scrollTop>a*2&&scrollTop<a*3){
    		scrollTop=a*2
   		}
    	if(scrollTop>a*3&&scrollTop<a*4){
    		scrollTop=a*3
   		}
    	$("body,html").stop();
        $("body,html").animate({
			"scrollTop":scrollTop+a+"px"
		},1000,function(){
			scrollTop1=$(document).scrollTop();
			bol=false;
			downUpFn();
			leftFn();
			appearFn();
			
		});
    }
})
// 返回顶部图标消失与出现
function appearFn(){
	scrollTop1=$(document).scrollTop();
	if(scrollTop1>0){
		$returnTop.css("display","block");
	}else{
		$returnTop.css("display","none");
	}
	if($returnTop.offset().top+$returnTop.height()+$(".footer_end").height()>=$(document).height()){
		console.log("aaaa");
		$returnTop.offset({
			"top":$(document).height()-$(".footer_end").height()-$returnTop.height()
		})
	}
	else{
		$returnTop.css({
			"top":"auto"
		})
	}	
}
// 鼠标控制滚动条事件
function mouseFn(){
	$(document).scroll(function(){
		downUpFn();
		appearFn();
		leftFn();
	})
}
// 大图滚动事件
$btn=$(".btn div");
$inner=$(".inner div");
var a;
$btn.on("click",function(){
	if (a==$(this).index()){
		return false;
	}
	a=$(this).index();
	$(this).addClass("btnChange").siblings().removeClass("btnChange");
	$inner.css({
		"z-index":"0",
		"opacity":"0.3"
	});
 	$inner.eq($(this).index()).fadeTo(500, 0.5, function(){
  	 	$(this).fadeTo(1000,1);
  	 	$(this).css("z-index","1");
 	});
})
// 返回顶部事件
$returnTop.on("click",function(){
	$("body,html").animate({
		"scrollTop":"0"
	},1000)
})
// 首页第2块的动画效果
// 动画效果，从下往上淡出
downUpFn();
function downUpFn(){
	if($(document).scrollTop()>=$(window).height()){
		$(".c1 ul li").css({
			marginTop:"230px",
			opacity:0
		})
		$(".c1 ul li ").animate({
			opacity:1,
			marginTop:"0px"
		},1000)
	}

}
// 悬浮事件
// 添加事件
$imagey=["img/imgs2/s_item11.jpg","img/imgs2/s_item22.jpg","img/imgs2/s_item33.jpg","img/imgs2/s_item44.jpg"];
$imageh=["img/imgs2/s_item1.jpg","img/imgs2/s_item2.jpg","img/imgs2/s_item3.jpg","img/imgs2/s_item4.jpg"];
$(".c1 ul li img").hover(
  	function (){
    	$(this).attr("src",$imagey[$(this).index(".img")]);
 	},
  	function (){
  		console.log($(this).index(".img"));
  		$(this).attr("src",$imageh[$(this).index(".img")]);
 	 }
);
// 首页第3块动画效果
leftFn();
function leftFn(){
	if($(document).scrollTop()>=2*$(window).height()){
		$(".c2 ul li:nth-of-type(2)").css({
			margin:"0 0"
		})
		$(".c2 ul li:nth-of-type(2)").animate({
			margin:"0 3%"
		},1000)
	}
}
// 首页第4块动画效果
// 获取span的值
var $valAll=[];
$(".honor_content>li>p>span").each(function(){
	$valAll.push($(this).text());
})
// var t=0;

function timeFn(i,docEle){
	var t=0;
	var w=docEle.innerText;
	// console.log("w",w);
	var num=w/100;
	// console.log("num",num);
	var interval=setInterval(function(){
		if($(document).scrollTop()>=3*$(window).height()){
			t=t+num;
			if(t>w){
				$(".honor_content>li>p>span").eq(i).text(w);
				clearInterval(interval)
			}else{
				$(".honor_content>li>p>span").eq(i).text("");
				$(".honor_content>li>p>span").eq(i).text(Math.ceil(t));
			}
		}
	},20);
}
$(".honor_content>li>p>span").each(function(i,docEle){
	console.log(docEle);
	timeFn(i,docEle);
})
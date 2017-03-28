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
	if($returnTop.offset().top+$returnTop.height()+$(".footer_end").height()>$(document).height()){
		console.log("aaaa");
		console.log($returnTop.height());
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
		appearFn();
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
// 第二导航点击事件
var $con_wrap=$(".content_wrap");
var $a=$(".title>ul>li>a");
var $data =$(".content_wrap>div") ;
var $data1 =$(".content_wrap>.class_1");
var $data2 =$(".content_wrap>.class_2");
var $data3 =$(".content_wrap>.class_3");
var $data4 =$(".content_wrap>.class_4");
var $data5 =$(".content_wrap>.class_5");
var $data6 =$(".content_wrap>.class_6");
var $data7 =$(".content_wrap>.class_7");
var $data8 =$(".content_wrap>.class_8");
$(".title>ul>li>a").on("click",function(){
	$(".content_wrap>div").css({
		left:0,
		top:0,
		width:0
	})
	$(".content_wrap>div").remove();
	switch ($(this).index(".a1")){
		case 0:
			$(".content_wrap").append($data);
			break;
		case 1:
			$(".content_wrap").append($data1);
			break;
		case 2:
			$(".content_wrap").append($data2);
			break;
		case 3:
			$(".content_wrap").append($data3);
			break;
		case 4:

			$(".content_wrap").append($data4);
			break;
		case 5:
			$(".content_wrap").append($data5);
			break;
		case 6:
			$(".content_wrap").append($data6);
			break;
		case 7:
			$(".content_wrap").append($data7);
			break;
		case 8:
			$(".content_wrap").append($data8);
			break;
	}
	console.log(arrH);
	// 点击前清掉上一次留下
	click();
	changeFn();
	$(".footer").css({
		top:indexValue
	})
	$con_wrap.eq($(this).index(".a1")).addClass("active").siblings().removeClass("active");
	$(this).addClass("aActive").parent().siblings().find("a").removeClass("aActive");
})
// 瀑布流
//浏览器宽度为799时，分2列，其他情况分3列
var $col=0;
// 数组用来保存每一个div的高度
var arrH=[];
var indexMax=0;
changeFn();
function changeFn(){
	$windowW=$(window).width();
	if($windowW>799){
		$col=3;
	}else{
		$col=2;
	}
	// 计算每个div的宽度
	$divW=($windowW-20)/$col;
	// 设置每个divd的宽度
	$(".content_wrap>div").css("width",$divW);
	// 遍历每一个div
	$(".content_wrap>div").each(function(i){
		// 第一列
		if(i<$col){
			$(".content_wrap>div").eq(i).css({
				left:$divW*i+i*10,
				top:0
			})
			arrH.push($(".content_wrap>div").eq(i).height());
			indexMax=arrH.indexOf(Math.max(...arrH));
			indexValue=arrH[indexMax];
			console.log(arrH);
			console.log(indexValue);
		}
		// 不是第一列
		else{
			// 判断第一列的最小高度，求最小值
			var index=arrH.indexOf(Math.min(...arrH));
			$(".content_wrap>div:visible").eq(i).css({
				top:arrH[index]+10,
				left:$divW*index+10*index
			})
			// 获取新增加的高度
			var $H=$(".content_wrap>div").eq(i).height()+10;
			arrH[index]+=$H;
			//获取最大高度
			indexMax=arrH.indexOf(Math.max(...arrH));
			indexValue=arrH[indexMax];
			console.log(arrH);
			console.log(indexValue);
		}
	})
	arrH=[];
};
window.onresize=function(){
	console.log("窗口已改变");
	$windowW=$(document).width();
 	changeFn();
 	$(".footer").css({
		top:indexValue
	})
};
click();
// 放大点击图片
var Imgbol=false;
var img=new Image();
var value=0;
var p=$("<p>室外透视白天</p>");
function click(){	
	$(".content_wrap>div").on("click",function(){
		$(".mask1").css({
			display:"block"
		})
		if(Imgbol){	
			$(".fixDiv").css({
				"width":0,
				"height":0
			})
		}
		value=$(this).index();
		$(".fixDiv").toggle();
		Imgbol=false;
		// 创建一个图片标签img
		var src=$(this).find(".img1").attr("src");
		console.log(src);
		img.src=src;
		$(".fixDiv").append(img);
		$(".fixDiv>img").eq(1).addClass("img_1");
		$(".fixDiv").append(p);
		$(".fixDiv").css({
			"width":$(this).width()*1.1,
			"height":$(this).height()*1.1+40
		})
		Imgbol=true;
	})
	//给放大图片的div，关闭小图标添加点击事件
	$(".close").on("click",function(){
		$(".fixDiv").css("display","none");
		$(".mask1").css({
			display:"none"
		})
	})
}
// 放大图上的按钮事件
// 右边按钮
var left_Btn=false;
var right_Btn=true;
$(".right>img").on("click",function(){
	if(left_Btn){
		console.log("aaaa");
		$(".fixDiv").css({
				"width":0,
				"height":0,
		})
		console.log("1",$(".fixDiv").css("height"));
	}
	left_Btn=false;
	// 获取当下点下的div的下标
	var length=$(".content_wrap>div").length-1;
	value++;
	if(value>length){
		value=0
	}
	var src=$(".img1").eq(value).attr("src");
	$(".img_1").attr("src",src);
	$(".fixDiv").css({
			"transition":"0s",
			"width":$(".img1").eq(value).width()*1.1,
			"height":$(".img1").eq(value).height()*1.1+40
	})
	left_Btn=true;
})
// 坐边按钮
$(".left>img").on("click",function(){
	console.log("0",$(".fixDiv").css("height"));
	if(left_Btn){
		console.log("aaaa");
		$(".fixDiv").css({
				"width":0,
				"height":0,
		})
		console.log("1",$(".fixDiv").css("height"));
	}
	left_Btn=false;
	// 获取当下点下的div的下标
	var length=$(".content_wrap>div").length-1;
	value--;
	if(value<0){
		value=length
	}
	var src=$(".img1").eq(value).attr("src");
	$(".img_1").attr("src",src);
	$(".fixDiv").css({
			"transition":"0s",
			"width":$(".img1").eq(value).width()*1.1,
			"height":$(".img1").eq(value).height()*1.1+40
	})
	left_Btn=true;
})
// 设置footer的top值
$(".footer").css({
	top:indexValue
})
// 设置遮罩层的高
// 获取高度
var $height1=$(window).height();
$(".mask1").css({
	height:$height1
})



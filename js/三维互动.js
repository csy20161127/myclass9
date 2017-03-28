// 获取左右边元素
var $left2=$(".c2 .left img");
var $rigth2=$(".c2 .right");
var $divH=0;
var T=0;
var i=0;
var bol2=false;
var bol3=false;
var $num=0;
rightH1();
function rightH1(){
	// 获取左右边元素
	var $left=$(".c1 .left img");
	var $rigth=$(".c1 .right");
	// 获取左边的高度
	var $leftH=$left.height();
	$rigth1=$(".c1 .right").css("height",$leftH);
	// 获取右边的元素
	$div1=$(".c1 .right div");
	var $marginTop=$div1.css("margin-top");
	// 设置右边元素的高度
	$divH=($leftH-parseInt($marginTop)*6)/6;
	$div1.css("height",$divH);
};
rightH2();
function rightH2(){
	// 获取左边的高度
	var $leftH2=$left2.height();
	$rigth2=$(".c2 .right").css("height",$leftH2);
	// 获取右边的元素
	$div2=$(".c2 .right div div");
	var $marginTop=$div2.css("margin-top");
	// 设置右边元素的高度
	$divH=($leftH2-parseInt($marginTop)*6)/6;
	// console.log("1",$divH);
	$div2.css("height",$divH);
};
rightH3();
function rightH3(){
	var $left3=$(".c3 .left img");
	var $rigth3=$(".c3 .right");
	// 获取左边的高度
	var $leftH3=$left3.height();
	// console.log($leftH3)
	$rigth3=$(".c3 .right").css("height",$leftH3);
	// 获取右边的元素
	$div3=$(".c3 .right div div");
	var $marginTop=$div3.css("margin-top");
	// 设置右边元素的高度
	$divH=($leftH3-parseInt($marginTop)*6)/6;
	$div3.css("height",$divH);
	// console.log("2",$divH);
	// console.log("top:",$(".c3 .rignt_inner").position().top);
};
$(window).resize(function(){
	rightH1();
	rightH2();
	// 按下右边按钮窗口调大，div不变
	if(bol2){
		$(".c2 .rignt_inner:visible").css({
				"top":-($divH+8)
			},function(){
				$(".up").css("opacity","1");
				console.log($divH);
				console.log("top:",$(".c2 .rignt_inner").css("top"));
		})
	}
	// console.log("top:",$(".c2 .rignt_inner").css("top"));
	rightH3();
	if(bol3){
		T=0;
		T=(i-1)*-($divH+8);
			$(".c3 .rignt_inner:visible").css({
				"top":T-($divH+8)
			},"2000",function(){
				$(".up").css("opacity","1");
			})
	}
});
	// console.log("top:",$(".c3 .rignt_inner").css("top"));
// 2
var $down=$(" .c2 .down img");
var $up=$(".c2 .up img");
clickBtn();
function clickBtn(){
	$down.on("click",function(){
		bol2=true;
		rightH2();
		// console.log($divH);
		$(".c2 .rignt_inner").animate({
			"top":-($divH+8)
		},"2000",function(){
			$(".up").css("opacity","1");
			console.log($divH);
			console.log("top:",$(".c2 .rignt_inner").css("top"));
		})
	})
	$up.on("click",function(){
		bol2=false;
		if(bol2=false){
			$(this).css("display","none");
			return;
		}
		rightH2();;
		$(" .c2 .rignt_inner").animate({
			"top":0
		},"2000",function(){
			$(".down_bth").css("display","block");
		})
	})
//3
var $down1=$(" .c3 .down img");
var $up1=$(".c3 .up img");
	$down1.on("click",function(){
		bol3=true;
		// console.log("1",$divH);
		T=$(".c3 .rignt_inner").position().top;
		console.log("T1",T);
		if(i>=2){
			i=2;
			return;
		}
		i++;
		console.log(i);
		$(".c3 .rignt_inner").animate({
			"top":T-($divH+8)
		},"2000",function(){
			$(".up").css("opacity","1");
		})
		console.log("1",$divH);
	})
	$up1.on("click",function(){
		if(bol3==false){
			$(this).css("display","none");
			return;
		}
		var T=$(".c3 .rignt_inner").position().top;
		console.log("T1",T);
		console.log(i);
		if(i<=0){
			i=0;
			return;
		}
		i--;
		console.log(i);
		rightH3();
		console.log($(".rignt_inner").css("top"));
		console.log($divH);
		$(" .c3 .rignt_inner").animate({
			"top":T+$divH+8
		},"2000")
	})
}
console.log('T2',T);
// 点击左边隐藏的按钮
var $left_imgArr0=["img/img1/hd1.jpg","img/img1/hd2.jpg","img/img1/hd3.jpg", "img/img1/hd4.jpg"];
var $left_imgArr1=["img/img1/hd6.jpg","img/img1/hd5.jpg" ];
var $left_imgArr2=["img/img1/hd7.jpg","img/img1/hd8.jpg"];
var $left_imgArr3=["img/img1/hd10.jpg","img/img1/hd9.jpg"];
var $left_imgArr4=["img/img1/hd11.jpg", "img/img1/hd12.jpg"];
var $left_imgArr5=["img/img1/hd13.jpg", "img/img1/hd14.jpg"];
					  

// 获取隐藏的按钮
var $left_btn=$(".left_btn");
var $right_btn=$(".right_btn");
var $num=0;
// 添加点击事件
left_rightBtn($left_imgArr0);
function left_rightBtn(arr){	
	console.log("aaa");
	console.log(arr);
	$right_btn.off("click");
	$right_btn.on("click",function(){

		console.log("$num",$num);
		$num++;
		if($num>=arr.length){
			$num=0;
		}
		$(".left>img").attr("src",arr[$num]);
	})
	$left_btn.off("click");
	$left_btn.on("click",function(){
		$num--;
		if($num<0){
			$num=arr.length-1;
			console.log($num);
		}
		$(".left>img").attr("src",arr[$num]);
	})
}
$(".down").hover(function(){
	$(".down").css({
		"opacity":1
	})
},function(){
	$(".down").css({
		"opacity":0
	})
})
$(".up").hover(function(){
	$(".up").css({
		"opacity":1
	})
},function(){
	$(".up").css({
		"opacity":0
	})
})
$(".right").hover(function(){
	if(bol2){
		$(".up").css("opacity","1");
		return false;
	}
	$(".down").css("opacity","1");
},function(){
	$(".down").css("opacity","0");
	$(".up").css("opacity","0");
})
//  悬浮左边隐藏的按钮
$right_btn.hover(function(){
	$right_btn.children().eq(0).css("opacity","1");
},function(){
	$right_btn.children().eq(0).css("opacity","0")
})
$left_btn.hover(function(){
	$left_btn.children().eq(0).css("opacity","1")
},function(){
	$left_btn.children().eq(0).css("opacity","0")
})	
// 点击图片获取切换图片
var arr=["img/img1/hd1.jpg","img/img1/hd5.jpg","img/img1/hd7.jpg","img/img1/hd10.jpg","img/img1/hd11.jpg","img/img1/hd13.jpg"]
$(".c1>.right>div").on("click",function(){
	$(" .c1>.left>img").attr("src", arr[$(this).index()]);
		$div_num=$(this).index();
		console.log("$div_num",$div_num);
		switch ($div_num) {
			case 0:
				console.log("00");
				left_rightBtn($left_imgArr0);
				// $num=0;
				break;
			case 1:
				console.log("11");
				left_rightBtn($left_imgArr1);
				// $num=0;
				break;
			case 2:
				console.log("22");
				left_rightBtn($left_imgArr2);
				// $num=0;
				break;
			case 3:
				console.log("33");
				left_rightBtn($left_imgArr3);
				// $num=0;
				break;
			case 4:
				console.log("44");
				left_rightBtn($left_imgArr4);
				// $num=0;
				break;
			case 5:
				console.log("55");
				left_rightBtn($left_imgArr5);
				// $num=0;
				break;
		}
		
})
$(".c2>.right>.rignt_inner>div").click(function(){
	// console.log("bbbbbbb");
	// console.log("aaaaa");
	var src=$(this).find("img").attr("src");
	$(" .c2>.left>img").attr("src",src);
});
$(".c3>.right>.rignt_inner>div").on("click",function(){
	var src=$(this).find("img").attr("src");
	$(" .c3>.left>img").attr("src",src);
})
// 按钮悬浮事件
$(".rignt_1").hover(
	function(){
		if($(this).position().top==$divH){
			console.log("aaaa");
			$(".up_bth").css("display","block");
			$(".down_bth").css("display","none");
		}
		if($(this).position().top==0){
			console.log("bbbb");
			$(".down_bth").css("display","none");
			$(".up_bth").css("display","none");
		}
	}
)
// 
var $content=$(".content");
var leftImg=["img/img1/hd1.jpg","img/imgs1/The-car-01.jpg","img/imgs1/001.jpg"];
var $a=$(".title ul li a");
$(".title ul li a").on("click",function(){
	$content.eq($(this).index(".a1")).addClass("active").siblings().removeClass("active");
	$(".left>img").attr("src",leftImg[$(this).index(".a1")]);
	if($(this).index(".a1")==0){
		rightH1();
	}
	if($(this).index(".a1")==1){
		rightH2();
		if(bol2){
			$(".c2 .rignt_inner:visible").css({
				"top":-($divH+8)
			},function(){
				$(".up").css("opacity","1");
				console.log($divH);
				console.log("top:",$(".c2 .rignt_inner").css("top"));
			})
		}	
	}
	if($(this).index(".a1")==2){
		rightH3();
		if(bol3){
		T=0;
		// console.log("i",i);
		T=(i-1)*-($divH+8);
		// console.log("T",T);
			$(".c3 .rignt_inner:visible").css({
				"top":T-($divH+8)
			},"2000",function(){
				$(".up").css("opacity","1");
			})
		// console.log("$divH",$divH);
	}	
	}
	$(this).addClass("aActive").parent().siblings().find("a").removeClass("aActive");
})
// 首页第2块的动画效果
// 动画效果，从下往上淡出
downUpFn();
function downUpFn(){
	if($(document).scrollTop()>=$(".con1 div").offset().top-$(".con1 div").height()){
		console.log("aaaaaa");
		$(".con1>div>ul>li").css({
			top:"70px"
		})
		$(".con1>div>ul>li").animate({
			top:"0px"
		},1000)
	}
}
downUpFn1();
function downUpFn1(){
	if($(document).scrollTop()>=$(".con div").offset().top-$(".con div").height()){
		$(".con>div>ul>li").css({
			top:"70px"
		})
		$(".con>div>ul>li ").animate({
			top:"0px"
		},1000)
	}
}
downUpFn2();
function downUpFn2(){
	if($(document).scrollTop()>=$(".con1 div").offset().top-$(".con1 div").height()){
		$(".con>div>ul>li").css({
			top:"70px"
		})
		$(".con>div>ul>li ").animate({
			top:"0px"
		},1000)
	}
}
mouseFn();
// 鼠标控制滚动条事件
function mouseFn(){
	$(document).scroll(function(){
		downUpFn();
		downUpFn1();
	})
}
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
// 展开或关闭隐藏导航栏的小图标
var $nav_btn=$("#nav_btn img");
var $nav_content=$(" #nav_btn .nav ");
$nav_btn.on("click",function(){
	$nav_content.slideToggle();
})

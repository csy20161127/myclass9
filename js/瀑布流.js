// 瀑布流
//浏览器宽度为799时，分2列，其他情况分3列
var $col=0;
// 数组用来保存每一个div的高度
var arrH=[];
changeFn();
function changeFn(){
	// 获取浏览器的宽度
	$windowW=$(document).width();
	console.log($windowW);
	if($windowW>799){
		$col=3;
	}else{
		$col=2;
	}
	// 计算每个div的宽度
	$divW=($windowW-20)/$col;
	console.log($divW);
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
		}
		// 不是第一列
		else{
			// 判断第一列的最小高度，求最小值
			var index=arrH.indexOf(Math.min(...arrH));
			$(".content_wrap>div").eq(i).css({
				top:arrH[index]+10,
				left:$divW*index+10*index
			})
			// 获取新增加的高度
			var $H=$(".content_wrap>div").eq(i).height()+10;
			arrH[index]+=$H;

		}
	})
};
// $(window).resize(function(){
//  	changeFn();
// });
// 放大点击图片
var Imgbol=false;
var p=$("<p>室外透视白天</p>");
var img=new Image();
$(".content_wrap>div").on("click",function(){
	if(Imgbol){	
		$(".fixDiv").css({
			"width":0,
			"height":0
		})
	}
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
		"width":$(this).width()*1.5,
		"height":$(this).height()*1.5+40
	})
	Imgbol=true;
})
//给放大图片的div，关闭小图标添加点击事件
$(".close").on("click",function(){
	$(".fixDiv").css("display","none");
})



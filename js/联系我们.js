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
// 展开或关闭隐藏导航栏的小图标
var $nav_btn=$("#nav_btn img");
var $nav_content=$(" #nav_btn .nav ");
$nav_btn.on("click",function(){
	$nav_content.slideToggle();
})
// 百度地图API功能
// var $con_img=$(".div_1>img");
// $con_img.on("click",function(){
// 		arr_point=[arr["113.30764968","23.1200491"]
// 		var map = new BMap.Map("allmap");
// 		var point = new BMap.Point(arr_point[0]);
// 		map.centerAndZoom(point, 12);
// 		var marker = new BMap.Marker(point);  // 创建标注
// 		map.addOverlay(marker);              // 将标注添加到地图中
// 		marker.addEventListener("click",getAttr);
// 		function getAttr(){
// 			var p = marker.getPosition();       //获取marker的位置
// 			alert("marker的位置是" + p.lng + "," + p.lat);   
// 	}
// })
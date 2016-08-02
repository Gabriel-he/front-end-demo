$(document).ready(function() {
	$(window).on("load", function() {
		imgAllocate();
		// 备用内容
		var imgData = {
			"data": [{
				"src": "./imgs/1.jpg"
			}, {
				"src": "./imgs/2.jpg"
			}, {
				"src": "./imgs/3.jpg"
			}, {
				"src": "./imgs/4.jpg"
			}, {
				"src": "./imgs/5.jpg"
			}, {
				"src": "./imgs/6.jpg"
			}, {
				"src": "./imgs/7.jpg"
			}, {
				"src": "./imgs/8.jpg"
			}, {
				"src": "./imgs/9.jpg"
			}, {
				"src": "./imgs/10.jpg"
			}, {
				"src": "./imgs/11.jpg"
			}, {
				"src": "./imgs/12.jpg"
			}, {
				"src": "./imgs/13.jpg"
			}, {
				"src": "./imgs/14.jpg"
			}, {
				"src": "./imgs/15.jpg"
			}, {
				"src": "./imgs/16.jpg"
			}, {
				"src": "./imgs/17.jpg"
			}, {
				"src": "./imgs/18.jpg"
			}, {
				"src": "./imgs/19.jpg"
			}, {
				"src": "./imgs/20.jpg"
			}, ]
		};
		// 处理加载图片
		$(window).on("scroll", function() {
			if (scrollSlide() == true) {
				$.each(imgData.data, function(index, value) {
					var box = $("<div>").addClass("pic-box").appendTo($("#container"));
					var content = $("<div>").addClass("content").appendTo(box);
					//console.log($(value).attr("src"));
					$("<img>").attr("src", $(value).attr("src")).appendTo(content);

				});
				imgAllocate();
			}

		});
		// 响应窗口大小变化增加稳定性
		$(window).on("resize", function(){
			imgAllocate();
		});
	});
});
// 判断是否需要继续加载
function scrollSlide() {
	var box = $(".pic-box");
	var lastBoxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
	var windowHeight = $(window).height();
	var scrollHeight = $(window).scrollTop();

	return (lastBoxHeight < scrollHeight + windowHeight);
}
// 图片整理
function imgAllocate() {
	var box = $(".pic-box");
	var boxWidth = box.eq(0).width();
	//console.log(boxWidth);
	var num = Math.floor($(window).width() / boxWidth);
	//console.log(num);
	var boxHeightArr = [];
	// 以下两行使窗口在resize时能够保持页面内容居中
	var containerWidth = num * boxWidth;
	$('#container').css("width",containerWidth);

	box.each(function(index, value) {
		// 初始化
		value.style.cssText = '';
		var boxHeight = box.eq(index).height();
		if (index < num) {
			boxHeightArr[index] = boxHeight;
		} else {
			var minHeight = Math.min.apply(null, boxHeightArr);
			var minIndex = $.inArray(minHeight, boxHeightArr);
			//console.log(box.eq(minIndex));
			$(value).css({
				"position": "absolute",
				"top": minHeight,
				"left": box.eq(minIndex).position().left
			});
			boxHeightArr[minIndex] += $(value).height();
		}
	});
}
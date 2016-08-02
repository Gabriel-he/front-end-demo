$(document).ready(function() {
	// slider1相关轮播特效
	$(".banner-box").hover(
		function() {
			prevArrow.fadeIn("normal");
			nextArrow.fadeIn("normal");
		},
		function() {
			prevArrow.fadeOut("normal");
			nextArrow.fadeOut("normal");
		}
	);

	prevArrow.click(function() {
		leftMove();
		tab();
	});
	nextArrow.click(function() {
		leftMove();
		tab();
	});

	//设置个定时器自动轮播,实际上就是触发点击事件
	var timer; //这是一个定时器
	function go() {
		timer = setInterval(function() {
			nextArrow.click();
		}, 3000);
	}

	//鼠标放上去清除定时器,鼠标移开再重新开始
	$(".banner-box").mouseover(function() {
		clearTimeout(timer);

	});
	$(".banner-box").mouseout(function() {
		go();

	});
	// slider1相关轮播特效END

	// slider2相关轮播特效
	// slider2按钮
	var sldr2Prev = $("#ds-arrow-left");
	var sldr2Next = $("#ds-arrow-right");
	$(".lesson-center-focus .swiper-container").hover(
		function() {
			sldr2Prev.fadeIn("normal");
			sldr2Next.fadeIn("normal");
		},
		function() {
			sldr2Prev.fadeOut("normal");
			sldr2Next.fadeOut("normal");
		}
	);
	sldr2Prev.click(function() {
		left($("#slider2-con"), 186, 2);
	});
	sldr2Next.click(function() {
		right($("#slider2-con"), 186, 2);
	});
	// slider3相关轮播特效
	// slider3按钮
	var sldr3Prev = $("#sldr3-arrow-left");
	var sldr3Next = $("#sldr3-arrow-right");
	$("#enterprise .strategy").hover(
		function() {
			sldr3Prev.fadeIn("normal");
			sldr3Next.fadeIn("normal");
		},
		function() {
			sldr3Prev.fadeOut("normal");
			sldr3Next.fadeOut("normal");
		}
	);
	sldr3Prev.click(function() {
		left($("#sldr3-header"), 162, 6);
	});
	sldr3Next.click(function() {
		right($("#sldr3-header"), 162, 6);
	});
	// slider4相关轮播特效
	// slider4按钮
	var sldr4Prev = $("#sldr4-arrow-left");
	var sldr4Next = $("#sldr4-arrow-right");
	$("#university .swiper-car-box").hover(
		function() {
			sldr4Prev.fadeIn("normal");
			sldr4Next.fadeIn("normal");
		},
		function() {
			sldr4Prev.fadeOut("normal");
			sldr4Next.fadeOut("normal");
		}
	);
	sldr4Prev.click(function() {
		left($("#sldr4-header"), 138, 5);
	});
	sldr4Next.click(function() {
		right($("#sldr4-header"), 138, 5);
	});
	// slider5相关轮播特效
	// slider5按钮
	var sldr5Prev = $("#sldr5-arrow-left");
	var sldr5Next = $("#sldr5-arrow-right");
	$(".learnbox .startegy-box").hover(
		function() {
			sldr5Prev.fadeIn("normal");
			sldr5Next.fadeIn("normal");
		},
		function() {
			sldr5Prev.fadeOut("normal");
			sldr5Next.fadeOut("normal");
		}
	);
	sldr5Prev.click(function() {
		left($("#sldr5-header"), 160, 2);
	});
	sldr5Next.click(function() {
		right($("#sldr5-header"), 160, 2);
	});

	// 热门课程下拉特效
	$("#hot-lessonbox ul li").each(function(index) {
		$(this).hover(
			function() {
				$("#hot-lessonbox ul li .lesson-hide-info").eq(index).slideDown();
				$("#hot-lessonbox ul li").eq(index).css("z-index", "800");
			},
			function() {
				$("#hot-lessonbox ul li .lesson-hide-info").eq(index).slideUp();
				$("#hot-lessonbox ul li").eq(index).css("z-index", "100");
			}
		);
	});
	//热门课程标签tab切换
	$(".hot-lesson ul li").each(function(index) {
		$(this).hover(
			function() {
				// 头部标签
				$(".hot-lesson ul .class-chosen").removeClass("class-chosen");
				$(this).addClass("class-chosen");
				// 内容
				$("#hot-lessonbox .lesson-list-chosen").removeClass("lesson-list-chosen");
				$("#hot-lessonbox .one-classfiy-lesson").eq(index).addClass("lesson-list-chosen");
			},
			function() {
				// hover走的时候保留现状
			}

		);
	});
	//翻转特效
	var verticalOpts = [{
		'width': 0
	}, {
		'width': '167px'
	}];

	$(".card-transform").each(function(index) {
		var time = 150;
		$(this).hover(
			function() {
				$(this).find('.front').stop().animate(verticalOpts[0], time, function() {
					$(this).hide().next().show();
					$(this).next().animate(verticalOpts[1], time);
				});
			},
			function() {
				$(this).find('.back-side').animate(verticalOpts[0], time, function() {
					$(this).hide().prev().show();
					$(this).prev().animate(verticalOpts[1], time);
				});
			}
		);
	});
	// 回到顶部按钮效果
	$(function() {
		$(window).scroll(function() {
			if ($(window).scrollTop() >= 100) {
				$('.returnToTop').fadeIn(300);
			} else {
				$('.returnToTop').fadeOut(300);
			}
		});
		$('.returnToTop').click(function() {
			$('html,body').animate({
				scrollTop: '0px'
			}, 800);
		});
	});
});

// slider1按钮
var prevArrow = $(".banner-box span").eq(0);
var nextArrow = $(".banner-box span").eq(1);

//向左点击移动
function leftMove() {
	var str = "";
	var numLeftNow = parseInt($(".banner-box ul").css("left"));
	//到最左
	if (numLeftNow <= -2240) {
		str = 0 + 'px';
	} else {
		str = numLeftNow - 560 + 'px';
	}

	$(".banner-box ul").css("left", str);
	return;
}

//向右点击移动
function rightMove() {
	var str = "";
	var numLeftNow = parseInt($(".banner-box ul").css("left"));
	//到最右
	if (numLeftNow >= 0) {
		str = -2240 + 'px';
	} else {
		str = numLeftNow + 560 + 'px';
	}
	$(".banner-box ul").css("left", str);
	return;
}

function tab() {
	var numLeftNow = parseInt($(".banner-box ul").css("left"));
	var index = Math.abs((numLeftNow / 560));
	$(".pagination .dash-active").removeClass("dash-active");
	$(".pagination .dash").eq(index).addClass("dash-active");
}

// slider2-slider5通用函数
function left(head, eWidth, eNum) {
	var str = "";
	var numLeftMost = eWidth * eNum * (-1);
	var numLeftNow = parseInt(head.css("left"));
	if (numLeftNow <= numLeftMost) {
		str = 0 + 'px';
	} else {
		str = numLeftNow - eWidth + 'px';
	}

	head.css("left", str);
	return;
}

function right(head, eWidth, eNum) {
	var str = "";
	var numLeftMost = eWidth * eNum * (-1);
	var numLeftNow = parseInt(head.css("left"));
	if (numLeftNow >= 0) {
		str = numLeftMost + 'px';
	} else {
		str = numLeftNow + eWidth + 'px';
	}

	head.css("left", str);
	return;
}
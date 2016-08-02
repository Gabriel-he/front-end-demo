$(document).ready(function() {
	var usr = sessionStorage.getItem("username");
	if (usr != "admin") {
		window.location.href = "/login";
	}


	//页面刷新时与数据库保持一致
	refreshTable();
	// 切换tab页面
	$('.panel-group ul li').each(function(index) {
		/* iterate through array or object */
		var liNode = $(this);
		liNode.click(function(event) {

			/* Act on the event */
			$('.panel-group ul li .tab-chosen').removeClass('tab-chosen');
			$('article .tab-active').removeClass('tab-active');
			liNode.children('a').addClass('tab-chosen');
			$('article .table').eq(index).addClass('tab-active');
			refreshTable();
		});

	});

	//响应删除操作,绑定在article上是因为其他元素会动态变化，否则事件无法正常响应
	$('article').on('click', '.tab-active .delete-btn', function(event) {
		/* Act on the event */
		// 增加用户体验 避免误删
		var r = confirm("确定删除此条新闻？");
		if (!r) {

			return;
		}

		var msg = $(this).parents('tr');
		var id = msg.children('td').eq(0).text();
		$.ajax({
				url: '/delete',
				type: 'POST',
				dataType: 'json',
				data: {
					"id": id
				},
			})
			.done(function(data) {
				// 数据库操作成功，删除当前条目
				msg.children('td').remove();
				msg.remove();
				
			})
			.fail(function(data) {

			});
	});



	//新增条目处理主函数
	$('article').on('click', '.tab-active .add_news .add-btn', function(event) {
		// $('.tab-active .add_news .add-btn').click(function(event) {
		/* Act on the event */
		var r = confirm("确定新增此条新闻？");
		if (!r) {

			return;
		}

		var type = getType();
		var title = $('.tab-active .add_news .title_input').val();
		var img = $('.tab-active .add_news .img_input').val();



		if ((type == null) || (title == "")|| (img == "")) {
			alert("输入错误");
			return;
		}


		var news = {
			// "id": $('.add_news input').eq(0).val(),
			"type": type,
			"title": title,
			"img": img,
		};

		$.ajax({
				url: '/add',
				type: 'POST',
				dataType: 'json',
				data: news,
			})
			.done(function(data) {

				refreshTable();
			})
			.fail(function(data) {
				alert("新增内容错误");
			});
	});
	var gId = 0;
	//修改条目处理主函数
	$('article').on('click', '.tab-active .modify-btn', function(event) {
		gId = $(this).parents('.data-row').children('td')[0].innerText;

		var modify_box = $('.tab-active .modify_news');
		modify_box.slideToggle('normal');

		var news = {
				"id": gId,
			};

		$.ajax({
				url: '/select_id',
				type: 'POST',
				dataType: 'json',
				data: news,
			})
			.done(function(data) {
				var obj = data[0];//id唯一，故就一条返回值
				$('.tab-active .modify_news .title_input').val(obj.TITLE);
				$('.tab-active .modify_news .img_input').val(obj.IMG);
				//refreshTable();
			})
			.fail(function(data) {

			});

		return;
	});
	//响应提交按钮
	$('article').on('click','.tab-active .modify_news .modify-sub-btn', function(event) {

		var id = gId;
		var type = getType();
		var title = $('.tab-active .modify_news .title_input').val();
		var img = $('.tab-active .modify_news .img_input').val();

		var r = confirm("确定修改此条新闻？");
		if (!r) {

			return;
		} else {
			if ((type == null) || (id == 0) || (title == "") || (img == "")) {
				alert("输入不完整，请检查后再试！");
				return;
			}
			var news = {
				"id": id,
				"type": type,
				"title": title,
				"img": img,
			};

			$.ajax({
					url: '/modify',
					type: 'POST',
					dataType: 'json',
					data: news,
				})
				.done(function(data) {

					refreshTable();
				})
				.fail(function(data) {

					alert("新增内容错误");
				});
		}
		$('.tab-active .modify_news').slideUp('normal');
	});

});


/**
 * 实现对当前active的表格进行刷新，与数据库内容保持一致
 * @return {无}
 */
function refreshTable() {

	var type = getType();

	if (type == null) {
		alert('error:refresh get type wrong');
		return;
	}

	var tab = $('.tab-active table');
	$.ajax({
			url: '/select',
			type: 'POST',
			dataType: 'json',
			data: {
				"type": type
			},
			//contentType: "application/json; charset=utf-8",//(可以)
		})
		// 数据返回成功
		.done(function(data) {

			//清除当前数据,先删除td再tr
			$('.tab-active table td').remove();
			$('.tab-active table .data-row').remove();
			//重写
			writeToTable(tab, data);

		})
		.fail(function(data) {
			//console.log("ajax communication error");
		});
}
/**
 * @param  {table：当前需要写入内容的表格}
 * @param  {data：数据库返回的内容}
 * @return {无}
 */
function writeToTable(table, data) {
	//console.log(data);
	var len = data.length;
	for (var i = 0; i < len; i++) {
		var obj = data[i];
		var tr = $("<tr>").appendTo(table);
		tr.addClass('data-row');
		$("<td>").text(obj.ID).appendTo(tr);
		$("<td>").text(obj.TYPE).appendTo(tr);
		$("<td>").text(obj.TITLE).appendTo(tr);
		//格式化时间
		var timeFormatted = moment(obj.TIME).format('YYYY-MM-DD');
		$("<td>").text(timeFormatted).appendTo(tr);
		$("<td>").text(obj.IMG).appendTo(tr);
		var btn = $("<td>").html("<button>delete</button> <button>modify</button>").appendTo(tr);
		btn.children().eq(0).addClass('delete-btn');
		btn.children().eq(1).addClass('modify-btn');
	}
}
/**
 * @return {获取到的当前页面属于的数据库中的类型，以匹配TYPE字段}
 */
function getType() {
	var tab = $('.tab-active table');

	if (tab.hasClass("type1")) {
		type = '推荐';
	} else if (tab.hasClass("type2")) {
		type = "百家";
	} else if (tab.hasClass("type3")) {
		type = "本地";
	} else if (tab.hasClass("type4")) {
		type = "图片";
	} else if (tab.hasClass("type5")) {
		type = "娱乐";
	} else if (tab.hasClass("type6")) {
		type = "社会";
	} else if (tab.hasClass("type7")) {
		type = "军事";
	} else if (tab.hasClass("type8")) {
		type = "女人";
	} else if (tab.hasClass("type9")) {
		type = "教育";
	} else if (tab.hasClass("type10")) {
		type = "科技";
	} else {
		type = null;
	}
	return type;
}


$('.user-name #user_menu a').click(function() {
	/* Act on the event */
	sessionStorage.setItem("username", "");
	window.location.href = "/login";

});
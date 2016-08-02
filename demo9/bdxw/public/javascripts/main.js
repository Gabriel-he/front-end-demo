$(document).ready(function(){
	initNewsToDoc();
	$('.nav-box ul li').each(function(index) {
		var liNode = $(this);
		liNode.click(function() {
			/* Act on the event */
			$('article .tab-active').removeClass("tab-active");
            
            $('article .con-tab').eq(index).addClass("tab-active");
            //其他页面的初始化
            initNewsToDoc();

		});

	});
});
// 加载更多页面事件
$('article').on('click', '.tab-active .add-more', getNewsToDoc);

/**
 * 用于点击标签切换时对新页面的初始载入
 * 和网页载入时的页面初始化
 * @return {无}
 */
function initNewsToDoc(){
	var currentNewsNumber = $('.tab-active .news-wrap').length;
	var num = 3;//初始化显示3条新闻
	if (currentNewsNumber == 0){
		getNewsToDoc(num);
	} else {
		return;
	}
	return;
}
/**
 * 用于响应点击更多加载向数据库查询数据
 * @param  {想要追加的新闻条数，默认为2}
 * @return {无}
 */
function getNewsToDoc(moreNum){

	var num;
	// 入参检查，click事件不带参数传入
	if(!isNaN(moreNum)){
		num = moreNum;		
	} else {
		num = 2;
	}

	// 获取后台数据
	var currentNewsNumber = $('.tab-active .news-wrap').length;
	var type = getType();

	if(type == null){
		//console.log("get type error at main.js");
		return;
	}

	$.ajax({
			url: '/select',//jq判断相对路径时根路径在父级
			type: 'POST',
			dataType: 'json',
			data: {
				"currentNewsNumber": currentNewsNumber,
				"type":type,
			},
		})
		.done(function(data) {
			insertToDoc(data,currentNewsNumber,num);//点一次插入两条
		})
		.fail(function(data) {

		});

}

/**
 * @return {当前页面在数据库中对应的TYPE类型}
 */
function getType(){
	var tab = $('article .tab-active');

	if (tab.hasClass("con-tab1")) {
		type = '推荐';
	} else if (tab.hasClass("con-tab2")) {
		type = "百家";
	} else if (tab.hasClass("con-tab3")) {
		type = "本地";
	} else if (tab.hasClass("con-tab4")) {
		type = "图片";
	} else if (tab.hasClass("con-tab5")) {
		type = "娱乐";
	} else if (tab.hasClass("con-tab6")) {
		type = "社会";
	} else if (tab.hasClass("con-tab7")) {
		type = "军事";
	} else if (tab.hasClass("con-tab8")) {
		type = "女人";
	} else if (tab.hasClass("con-tab9")) {
		type = "教育";
	} else if (tab.hasClass("con-tab10")) {
		type = "科技";
	} else {
		type = null;
	}
	return type;
}

/**
 * 控制插入新闻
 * @param  {数据库返回的内容}
 * @param  {当前页面已有新闻条数}
 * @param  {向当前页面追加新闻条数}
 * @return {无}
 */
function insertToDoc(data,currentNewsNumber,moreNum){
	var len = data.length;
	var from = currentNewsNumber;
	var to = Math.min(currentNewsNumber + moreNum, len);//避免越界
	for(var i = from; i < to; i++){
		var obj = data[i];
		// 构造新闻结构并插入文档
		var news_wrap = $("<div>").appendTo('.tab-active .news-container');
		news_wrap.addClass('news-wrap');
		var img_wrap = $("<div>").appendTo(news_wrap);
		img_wrap.addClass('img-wrap');
		var img = $("<img>").appendTo(img_wrap);
		img.attr("src",obj.IMG);
		var news_box = $("<div>").appendTo(news_wrap);
		news_box.addClass('news-box');
		var news_title = $("<div>").appendTo(news_box);
		news_title.addClass('news-title');
		$("<span>").text(obj.TITLE).appendTo(news_title);
		var news_time = $("<div>").appendTo(news_box);
		news_time.addClass('news-time');
		var timeFormatted = moment(obj.TIME).format('YYYY-MM-DD');
		$("<span>").text(timeFormatted).appendTo(news_time);
	}
}
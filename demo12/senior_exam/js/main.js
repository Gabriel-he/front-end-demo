$('header div').each(function(index, val) {
	 /* iterate through array or object */
	 var tabNode = $(this);
	 tabNode.click(function(event) {
	 	console.log("aaa");
	 	/* Act on the event */
	 	$('.index-tab-on').removeClass('index-tab-on');
	 	tabNode.addClass('index-tab-on');
	 	$('.tab-active').removeClass('tab-active');
	 	$('.tab').eq(index).addClass('tab-active');
	 });
});
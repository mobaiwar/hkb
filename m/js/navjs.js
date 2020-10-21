Zepto(function($){
	// 触摸 导航折叠栏
	$('.nav').hide();
	$('.nav_view').on('tap', function(event) {
		event.preventDefault();
		$('.nav').show();
		$('.header_row2').hide();
	});
	// 触摸 搜索按钮
	$('.search_none,#hot-search,#search_input').hide();
	$('.tap_seach').on('tap', function(event) {
		event.preventDefault();
		$('.head_tit,.header_row2').hide();
		$('#search_input').focus();
		$('#hot-search,#keyword,#search_input,.search_none,.cancel').show();
	});
	// 触摸 取消按钮
	$('.cancel').on('tap',function(event){
		$('.search_none,#search_input,#hot-search').hide();
		setTimeout(function(){
			$('.header_row2,.head_tit').show();
		},100)
		if($('.nav').css('display')==('block')){
			$('.header_row2').hide();
			
		}else{
			$('.header_row2').show();
		}
	});
	//关闭 导航内容
	$('.close_nav_c a').on('tap', function(event) {
		event.preventDefault();
		$('.nav').hide();
		$('.header_row2').show();
	});
  $('.close_nav_c span').on('tap', function(event) {
		event.preventDefault();
		$('.nav').hide();
		$('.header_row2').show();
	});
	// 触摸搜索 提交
	$('.position_icon').on('tap', function(event) {
		event.preventDefault();
		$('#search_form').submit();
	});
});






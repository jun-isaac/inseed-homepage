// 오시는 길 클릭시 지도 on
$(function(){
	$('.map-btn').click(
		function(){
			$('#map')
			.addClass('on')
		})
})

// 닫기 버튼 클릭시 지도 off
$(function(){
	$('.close').click(
		function(){
			$('#map')
			.removeClass('on')
		})
})
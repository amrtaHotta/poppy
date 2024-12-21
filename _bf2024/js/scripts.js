// JavaScript Document

	jQuery(document).ready(function () {
	jQuery('nav').meanmenu({
		meanMenuClose: "x", // クローズボタン
		meanMenuCloseSize: "20px", // クローズボタンのフォントサイズ
		meanMenuOpen: "<span /><span /><span />", // 通常ボタン
		meanRevealPosition: "enter", // 表示位置
		meanRevealColour: "", // 背景色
		meanScreenWidth: "640", // 表示させるウィンドウサイズ(ブレイクポイント)
});
	});



$(function(){
  $('.bxslider').bxSlider({
    auto: true,
	speed: 4500,
    mode: 'horizontal',
	pager: false,
	infiniteLoop: true,
	minSlides: 1,
	maxSlides: 1,
    moveSlides: 1,
	slideWidth: 980
});
})

$(function() {
//ボタン表示スクリプト
var pagetop = $('.pagetop');
pagetop.css({'display': 'none'});
$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
pagetop.fadeIn();
} else {
pagetop.fadeOut();
}
});
});
$(function() {
//移動するスクリプト
$('a[href^=#]').click(function() {
var href= $(this).attr('href');
var target = $(href == '#' || href == '' ? 'html' : href);
var position = target.offset().top;
$('html,body').animate({scrollTop: position}, 500, 'swing');
return false;
});
});
// JavaScript Document

$(window).scroll(function () {
  $(".fadein").each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 50) {
      $(this).addClass("scrollin");
    }
  });
});

$(window).scroll(function () {
  $(".marker01").each(function () {
    var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
    var scroll = $(window).scrollTop(); //スクロールの位置を取得
    var windowHeight = $(window).height(); //ウインドウの高さを取得
    if (scroll > position - windowHeight + 150) {
      //スクロール位置が要素の位置を過ぎたとき
      $(this).addClass("active"); //クラス「active」を与える
    }
  });
});

$(function () {
  //ボタン表示スクリプト
  var pagetop = $(".pagetop");
  pagetop.css({ display: "none" });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
});
$(function () {
  //移動するスクリプト
  $("a[href^=#]").click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html,body").animate({ scrollTop: position }, 500, "swing");
    return false;
  });
});

$(function () {
  $(".button").prevAll().hide();
  $(".button").click(function () {
    if ($(this).prevAll().is(":hidden")) {
      $(this).prevAll().slideDown();
      $(this).text("閉じる").addClass("close");
    } else {
      $(this).prevAll().slideUp();
      $(this).text("ここをタップ！").removeClass("close");
    }
  });
});

$(document).ready(function () {
  $(".bxslider").bxSlider({
    mode: "fade",
    auto: true,
    pause: 4000,
    pager: false,
    controls: false,
  });
});

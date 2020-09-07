// CSSインポート
import "../scss/app.scss";

// JSインポート
import "bootstrap";

$(function () {
  // スムーススクロール
  $('a[href^="#"]').on("click", function () {
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // SPメニュー
  $("#spmenuopen").on("click", function () {
    $(this).toggleClass("open");
    $("body").toggleClass("menuopen");
    $("#spmenu").toggleClass("open");
  });
  $(".orverlay").on("click", function () {
    $(this).toggleClass("open");
    $("body").toggleClass("menuopen");
    $("#spmenu").toggleClass("open");
  });

  // メニュートグル
  $("li.parent").on("click", function () {
    $(this).children("ul").slideToggle();
    $(this).toggleClass("toggle-open");
  });
});

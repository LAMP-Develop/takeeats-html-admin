// CSSインポート
import "../scss/app.scss";

// JSインポート
import "bootstrap";

$(function () {
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

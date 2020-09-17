// CSSインポート
import "../scss/app.scss";

// JSインポート
import "bootstrap";
import "bootstrap-input-spinner";
const feather = require("feather-icons");

$(function () {
  // featherIcons
  feather.replace({
    width: 18,
  });

  // resize
  $(window).on("load resize", function () {
    let nav_h = $("#navbar").outerHeight();
    // padding調整
    $("body").css("padding-top", nav_h + "px");
  });

  // SP Menu
  $(".navbar-toggle-btn, .orverray").on("click", function () {
    $("body").toggleClass("open");
    $("#sidebarMenu").toggleClass("open");
    $(this).toggleClass("active");
  });
});

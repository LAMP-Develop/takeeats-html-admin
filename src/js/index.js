// CSSインポート
import "../scss/app.scss";

// JSインポート
import "bootstrap";
import "bootstrap-input-spinner";

import { Calendar } from "@fullcalendar/core";
import jaLocale from "@fullcalendar/core/locales/ja";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";

const feather = require("feather-icons");

$(function () {
  // featherIcons
  feather.replace({
    width: 18,
  });

  // resize
  $(window).on("load resize", function () {
    let nav_h = $("#navbar").outerHeight();
    let window_w = $(window).width();
    // padding調整
    $("body").css("padding-top", nav_h + "px");
    if (window_w > 991.98) {
      $("#sidebarMenu").css("top", nav_h + "px");
    }
  });

  // SP Menu
  $(".navbar-toggle-btn, .orverray").on("click", function () {
    $("body").toggleClass("open");
    $("#sidebarMenu").toggleClass("open");
    $(this).toggleClass("active");
  });

  // --- Add item ------
  // 予約公開設定
  $("#postPublic").on("change", function () {
    if ($(this).prop("checked")) {
      $("#postPublic-date").css("display", "block");
    } else {
      $("#postPublic-date").css("display", "none");
      $("#postPublic-date")
        .find("input")
        .each(function () {
          $(this).val("");
        });
    }
  });
});

// 個別カレンダー
document.addEventListener("DOMContentLoaded", function () {
  let calendarEl = document.getElementById("calendar");
  if (calendarEl != null) {
    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, bootstrapPlugin],
      locale: jaLocale,
    });
    calendar.render();
  }
});

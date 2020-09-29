// CSSインポート
import "../scss/app.scss";

// JSインポート
import "bootstrap";
import "bootstrap-input-spinner";
import "select2";

import { Calendar } from "@fullcalendar/core";
import jaLocale from "@fullcalendar/core/locales/ja";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
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
  // 店舗設定
  $('input[name="saleshop-flag"]').on("change", function () {
    if ($(this).val() == 1) {
      $("#saleshop").addClass("select2-multiple");
      $("#saleshop").css("display", "block");
      $(".select2-multiple").select2({
        theme: "bootstrap4",
        placeholder: "キーワードで検索",
        language: "ja",
      });
    } else {
      $("#saleshop").removeClass("select2-multiple");
      $("#saleshop").select2("destroy");
      $("#saleshop").css("display", "none");
    }
  });
  // 在庫設定
  $("#stock-btn").on("click", function () {
    setTimeout(function () {
      let calendarEl = document.getElementById("calendar");
      if (calendarEl != null) {
        let calendar = new Calendar(calendarEl, {
          plugins: [interactionPlugin, dayGridPlugin, bootstrapPlugin],
          locale: jaLocale,
          initialView: "dayGridMonth",
          selectable: true,
          editable: true,
          selectLongPressDelay: 0,
          eventDurationEditable: false,
          eventClick: function (event) {
            var title = prompt("在庫を英数字入力してください", event.title);
          },
          eventSources: [
            {
              events: [
                {
                  title: "99",
                  start: "2020-09-01",
                },
                {
                  title: "99",
                  start: "2020-09-02",
                },
                {
                  title: "99",
                  start: "2020-09-03",
                },
                {
                  title: "99",
                  start: "2020-09-04",
                },
                {
                  title: "99",
                  start: "2020-09-05",
                },
                {
                  title: "99",
                  start: "2020-09-06",
                },
                {
                  title: "99",
                  start: "2020-09-07",
                },
                {
                  title: "99",
                  start: "2020-09-08",
                },
                {
                  title: "99",
                  start: "2020-09-09",
                },
                {
                  title: "99",
                  start: "2020-09-10",
                },
                {
                  title: "99",
                  start: "2020-09-11",
                },
                {
                  title: "99",
                  start: "2020-09-12",
                },
                {
                  title: "99",
                  start: "2020-09-13",
                },
                {
                  title: "99",
                  start: "2020-09-14",
                },
                {
                  title: "99",
                  start: "2020-09-15",
                },
                {
                  title: "99",
                  start: "2020-09-16",
                },
                {
                  title: "99",
                  start: "2020-09-17",
                },
                {
                  title: "99",
                  start: "2020-09-18",
                },
                {
                  title: "99",
                  start: "2020-09-19",
                },
                {
                  title: "99",
                  start: "2020-09-20",
                },
                {
                  title: "99",
                  start: "2020-09-21",
                },
                {
                  title: "99",
                  start: "2020-09-22",
                },
                {
                  title: "99",
                  start: "2020-09-23",
                },
                {
                  title: "99",
                  start: "2020-09-24",
                },
                {
                  title: "99",
                  start: "2020-09-25",
                },
                {
                  title: "99",
                  start: "2020-09-26",
                },
                {
                  title: "99",
                  start: "2020-09-27",
                },
                {
                  title: "99",
                  start: "2020-09-28",
                },
                {
                  title: "99",
                  start: "2020-09-29",
                },
                {
                  title: "99",
                  start: "2020-09-30",
                },
              ],
            },
          ],
        });
        calendar.render();
      }
    }, 500);
  });
});

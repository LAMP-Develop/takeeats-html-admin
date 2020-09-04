// CSSインポート
import "../scss/app.scss";

// JSインポート
import "bootstrap";

$(function() {
  $('li.parent').on('click', function () {
    $(this).children('ul').slideToggle();
    $(this).toggleClass('toggle-open');
  });
});
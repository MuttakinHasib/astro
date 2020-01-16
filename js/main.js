$(document).ready(function() {
  $(window).on("scroll", function() {
    let scroll = $(this).scrollTop();
    if (scroll >= 50) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }
  });
});

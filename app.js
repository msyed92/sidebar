$("button").click(function () {
  $(".sidebar").toggleClass("show-sidebar");
  if ($(window).width() < 700) {
    $(".toggle").toggleClass("remove");
  }
});

$(window).resize(function () {
  if ($(".sidebar").hasClass("show-sidebar")) {
    $(".toggle").toggleClass("remove");
  }
});

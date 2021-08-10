$("button").click(function () {
  $(".sidebar").toggleClass("show-sidebar");
  if ($(window).width() < 601) {
    $(".toggle").toggleClass("remove");
  }
});

$(window).resize(function () {
  if ($(".sidebar").hasClass("show-sidebar") && $(window).width() < 601) {
    $(".toggle").addClass("remove");
  }
});

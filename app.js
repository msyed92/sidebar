$("button").click(function () {
  $(".sidebar").toggleClass("show-sidebar");
  if ($(window).width() < 700) {
    $(".toggle").addClass("remove");
  } else {
    $(".toggle").removeClass("remove");
  }
});

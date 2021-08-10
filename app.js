$("button").click(function () {
  $(".sidebar").toggleClass("show-sidebar");
  if ($(window).width() < 601) {
    $(".toggle").toggleClass("remove");
  }
});

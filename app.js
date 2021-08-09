$("button").click(function () {
  $(".sidebar").toggleClass("show-sidebar");
  if ($(window).width() < 700) {
    $(".toggle").toggleClass("remove");
  }
});

$(window).resize(function () {
  if ($(window).width() < 700 && $(".sidebar").hasClass("show-sidebar")) {
    // $(".toggle").addClass("remove");
    alert("help");
  } else {
    $(".toggle").removeClass("remove");
  }
});

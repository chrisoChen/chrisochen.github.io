// Scroll vehicles on mobile left/right swipe:
//        extraced https://stackoverflow.com/questions/36523742/disable-javascript-based-on-screen-size
$(".carousel").on("touchstart", function (event) {
  var xClick = event.originalEvent.touches[0].pageX;
  $(this).one("touchmove", function (event) {
    var xMove = event.originalEvent.touches[0].pageX;
    if (Math.floor(xClick - xMove) > 0) {
      $(this).carousel("next");
    } else if (Math.floor(xClick - xMove) < -0) {
      $(this).carousel("prev");
    }
  });
  $(".carousel").on("touchend", function () {
    $(this).off("touchmove");
  });
});

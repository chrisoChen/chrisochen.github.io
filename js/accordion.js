$(function () {
  // Close all other accordion when opening one: Accordion doesn't work with Bootstrap 4
  $(".collapse").on("show.bs.collapse", function (e) {
    $(".collapse").collapse("hide");
  });

  // Add plus icon when element collapses
  $(".collapse").on("hide.bs.collapse", function () {
    $(this)
      .parentsUntil("li")
      .prev()
      .find("img")
      .attr("src", "./img/compressed-icons/add-sq1.svg");
  });

  // Add minus icon when user clicks on collapsable element
  $(".collapse").on("show.bs.collapse", function () {
    $(this)
      .parentsUntil("li")
      .prev()
      .find("img")
      .attr("src", "./img/compressed-icons/sub-sq1.svg");
  });
});

// ******************

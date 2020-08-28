$(function () {
  // Open labour overlay when clicking button
  $("#labour_btn").click(function () {
    $("#labour_overlay").css("display", "block");
  });

  // Close labour overlay when clicking "Close" button
  $("#labour_btn_close").click(function () {
    $("#labour_overlay").css("display", "none");
  });

  // Open specs overlay when clicking button
  $("#specs_btn").click(function () {
    $("#specs_overlay").css("display", "block");
  });

  // Close specs overlay when clicking "Close" button
  $("#specs_btn_close").click(function () {
    $("#specs_overlay").css("display", "none");
  });

  // Show selected vehicle on overlay
  $("#specs_select").on("change", function (e) {
    var selectedVehicle = $(this).find("option:selected").attr("value");

    // Hide all current vehicles
    $(".specs_body_grid").css("display", "none");

    $("#" + selectedVehicle + "_body_grid").css("display", "grid");
  });

  // Open deliveries overlay when clicking button
  $("#deliveries_btn").click(function () {
    $("#deliveries_overlay").css("display", "block");
  });

  // Close deliveries overlay when clicking "Close" button
  $("#deliveries_btn_close").click(function () {
    $("#deliveries_overlay").css("display", "none");
  });
});

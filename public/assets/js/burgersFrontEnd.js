// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devour").on("click", function (event) {
    var id = $(this).data("id");
    var nowDevoured = $(this).data("nowDevoured");

    // Send the PUT request - if devoured clicked sends devoured = 1
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: { devoured: "1" },
    }).then(function () {
      console.log("changed devoured to", nowDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    console.log("Clicking Submit");
    event.preventDefault();

    var newBurger = {
      name: $("#burger_input_text").val().trim(),
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created a burger to devour :)");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});

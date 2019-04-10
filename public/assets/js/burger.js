$(function () {

  // Add a burger.
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#new-burger").val().trim(),
      devoured: 0
    };
  
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      console.log("Added new burger");
      location.reload();
    });
  });

  $("#changes").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function () {
      console.log("Burger devoured");
      location.reload();
    });
  });

  $("#delete-burger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(function () {
      console.log("deleted burger", id);
      location.reload();
  });
})
})

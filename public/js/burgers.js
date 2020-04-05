// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var devouredState = $(this).data("newdevoured");

    if (!devouredState) {
      var newDevourState = {
        devoured: 1
      };
    } else {
      var newDevourState = {
        devoured: 0
      }
    }

    // send the PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then( 
      function() {
        console.log("changed devoured to", devouredState);
        // reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // make sure to preventDefault on a submit event
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
      devoured: 0
    };

    // send the POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // reload the page to get the updated list
        location.reload();
      }
    );
  });
});
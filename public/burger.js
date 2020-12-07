//click event
$(function() {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var newDevouredState = {
            devoured: devoured
        };
})

// Send the PUT request.
$.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevouredState
}).then(
    function () {
        console.log("changed devoured to", devoured);
        // Reload the page to get the updated list: 
        location.reload();
    }
);
});
// Submit Click event:
$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event. 
    event.preventDefault();

    var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: false
    };
    console.log(newBurger.burger_name)
    // POST
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            // Reload the page to get the updated list: 
            location.reload();
        }
    );
});

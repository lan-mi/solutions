// Dropdown Menu Small Screens
$(document).ready(function () {
    $(".small-nav-text").click(function () {
        $(".menu").slideToggle("slow");
    });
});

// Menu Arrow Change Up And Down
var navText = document.getElementById("small-nav-text");
navText.addEventListener("click", function () {
    document.getElementById("menu-arrow").classList.toggle("menu-arrow-up");
});

// Add image on click to cover div
$(document).ready(function () {
    $("img").on("click", function () {
        $(this).clone().appendTo("#cover");
    });

    // Cover div display on click
    $("img").on("click", function () {
        $("#cover").addClass("active");
    });

    //Close cover div
    $(".close").on("click", function () {
        $("#cover").removeClass("active");
    });

    //Remove image from cover div after closing
    $(".close").on("click", function () {
        $("#cover img").remove();
    });
});

//Scrollbar add/remove from body
$(document).ready(function () {
    $("img").click(function () {
        $("body").addClass("body");
    });
    $(".close").click(function () {
        $("body").removeClass("body");
    });
});

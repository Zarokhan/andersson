$(document).ready(function () {
    $("#first").addClass("active");
    $("#loginBtn").click(function () {
        $(".loginWrapper").toggleClass("open", "close");
        $("#loginBtn").toggleClass("active");
    });
});

function clearNav() {
    $("#first").removeClass("active");
}
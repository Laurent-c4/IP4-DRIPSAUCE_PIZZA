$(document).ready(function () {
    $("form").submit(function () {
        event.preventDefault();
        location.href = "../checkout.html";
    });
});
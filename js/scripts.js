//UI Logic
$(document).ready(function () {
    $("form").submit(function () {
        event.preventDefault();
        location.href = "../checkout.html";
    });
});

//Business Logic
function Pizza (price,crust,topping) {
    this.price=price;
    this.topping=topping;
    this.crust=crust;
}
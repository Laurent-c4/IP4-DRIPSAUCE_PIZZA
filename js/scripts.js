//UI LOGIC
$(document).ready(function () {
    $("form").submit(function () {
        event.preventDefault();
        location.href = "../checkout.html";
    });
    $("#btn-bbq_c").click(function() {

    });

    //Get User Input for pizza preference
});

//BUSINESS LOGIC
//Pizza Object
function Pizza (size,crust,topping) {
    this.size=size;
    this.topping=topping;
    this.crust=crust;
}

//Price for Size: [Small, Medium, Large]
var pizzaSizePrice = [100,200,300];

//Price for Toppings depending on Pizza Size: [Pepperoni, Mushrooms, Onions, Extra Cheese]
var smallPizzaToppingsPrice = [20,30,40,50];
var mediumPizzaToppingPrice = [30,40,50,60];
var largePizzaToppingPrice = [40,50,60,70];

//Price for Crust: [Clasic Crust, Thin 'N' Crispy, Cheesy Crust, Gluten Free Base]
var pizzaCrustPrice = [5,10,15,20]
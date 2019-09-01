var inputtedSize;
var inputtedTopping;
var inputtedCrust;
var pizzaPrice;
var pizzaType;

//BUSINESS LOGIC

//Create Pizza Objects
//BBQ Chicken Pizza
function bbqChickenPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "bbq_c";
}

//BBQ Steak Pizza
function bbqSteakPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "bbq_s";
}

//Chicken Tikka Pizza
function chickenTikkaPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "chk_tk";
}

//Hawaiian Chicken Pizza
function hawaiianPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "haw";
}

//Margherita Pizza
function margheritaPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "margh";
}

//Meatzza Pizza
function meatzzaPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "mtz";
}


//Default Pizza Price (Small Pizza)
var pizzaTypePriceF = function () {
    var pizzaTypePrice;
    if (pizzaType === "bbq_c") {
        pizzaTypePrice = 500;
    } else if (pizzaType === "bbq_s") {
        pizzaTypePrice = 600;
    } else if (pizzaType === "chk_tk") {
        pizzaTypePrice = 700;
    } else if (pizzaType === "haw") {
        pizzaTypePrice = 800;
    } else if (pizzaType === "margh") {
        pizzaTypePrice = 900;
    } else if (pizzaType === "mtz") {
        pizzaTypePrice = 1000;
    }
    return pizzaTypePrice;
}

//Additional Price Based on Size
var pizzaSizePriceF = function () {
    var pizzaSizePrice;
    if (inputtedSize === "large") {
        pizzaSizePrice = 400;
    } else if (inputtedSize === "medium") {
        pizzaSizePrice = 200;
    } else if (inputtedSize === "small") {
        pizzaSizePrice = 0;
    }
    return pizzaSizePrice;
}

//Additional Price Based on Crust
var pizzaCrustPriceF = function () {
    var pizzaCrustPrice;
    if (inputtedCrust == "classic_crust") {
        pizzaCrustPrice = 5;
    } else if (inputtedCrust === "thin_n_crispy") {
        pizzaCrustPrice = 10;
    } else if (inputtedCrust === "cheesy_crust") {
        pizzaCrustPrice = 15;
    } else if (inputtedCrust === "glutten_free_base") {
        pizzaCrustPrice = 20;
    }
    return pizzaCrustPrice;
}


//Additional Price Based on Toppings (Toppings Pricing also relies on Pizza Size)
var pizzaToppingPriceF = function () {
    var pizzaToppingPrice;
    if (inputtedSize === "large" && inputtedTopping === "pepperoni") {
        pizzaToppingPrice = 40;
    } else if (inputtedSize === "large" && inputtedTopping === "mushrooms") {
        pizzaToppingPrice = 50;
    } else if (inputtedSize === "large" && inputtedTopping === "onions") {
        pizzaToppingPrice = 60;
    } else if (inputtedSize === "large" && inputtedTopping === "extra_cheese") {
        pizzaToppingPrice = 70;
    } else if (inputtedSize === "medium" && inputtedTopping === "pepperoni") {
        pizzaToppingPrice = 30;
    } else if (inputtedSize === "medium" && inputtedTopping === "mushrooms") {
        pizzaToppingPrice = 40;
    } else if (inputtedSize === "medium" && inputtedTopping === "onions") {
        pizzaToppingPrice = 50;
    } else if (inputtedSize === "medium" && inputtedTopping === "extra_cheese") {
        pizzaToppingPrice = 60;
    } else if (inputtedSize === "small" && inputtedTopping === "pepperoni") {
        pizzaToppingPrice = 20;
    } else if (inputtedSize === "small" && inputtedTopping === "mushrooms") {
        pizzaToppingPrice = 30;
    } else if (inputtedSize === "small" && inputtedTopping === "onions") {
        pizzaToppingPrice = 40;
    } else if (inputtedSize === "small" && inputtedTopping === "extra_cheese") {
        pizzaToppingPrice = 50;
    }
    return pizzaToppingPrice;
}

var pizzaPriceF = function () {
    pizzaPrice = pizzaSizePriceF() + pizzaToppingPriceF() + pizzaCrustPriceF() + pizzaTypePriceF();
    return pizzaPrice;
}

//UI LOGIC
$(document).ready(function () {


    //Get User Input for pizza preference
    $(".bbq_c").on('change', function () {
        inputtedSize = $("#bbq_c-size").val();
        inputtedTopping = $("#bbq_c-toppings").val();
        inputtedCrust = $("#bbq_c-crust").val();
        bbqChickenOrder = new bbqChickenPizza(inputtedSize, inputtedCrust, inputtedTopping);
        pizzaType = bbqChickenOrder.type;
        $("#bbq_c-price").remove();
        $("#bbq_c-card").append("<div id='bbq_c-price'>" +
            "<p>" + pizzaPriceF() + "</p>" +
            "</div>");
    });

    $(".bbq_s").on('change', function () {
        inputtedSize = $("#bbq_s-size").val();
        inputtedTopping = $("#bbq_s-toppings").val();
        inputtedCrust = $("#bbq_s-crust").val();
        bbqSteakOrder = new bbqSteakPizza(inputtedSize, inputtedCrust, inputtedTopping);
        pizzaType = bbqSteakOrder.type;
        $("#bbq_s-price").remove();
        $("#bbq_s-card").append("<div id='bbq_s-price'>" +
            "<p>" + pizzaPriceF() + "</p>" +
            "</div>");
    });

    $(".chk-tk").on('change', function () {
        inputtedSize = $("#chk_tk-size").val();
        inputtedTopping = $("#chk_tk-toppings").val();
        inputtedCrust = $("#chk_tk-crust").val();
        chickenTikkaOrder = new chickenTikkaPizza(inputtedSize, inputtedCrust, inputtedTopping);
        pizzaType = chickenTikkaOrder.type;
        $("#chk_tk-price").remove();
        $("#chk_tk-card").append("<div id='chk_tk-price'>" +
            "<p>" + pizzaPriceF() + "</p>" +
            "</div>");
    });

    $(".haw").on('change', function () {
        inputtedSize = $("#haw-size").val();
        inputtedTopping = $("#haw-toppings").val();
        inputtedCrust = $("#haw-crust").val();
        hawaiianOrder = new hawaiianPizza(inputtedSize, inputtedCrust, inputtedTopping);
        pizzaType = hawaiianOrder.type;
        $("#haw-price").remove();
        $("#haw-card").append("<div id='haw-price'>" +
            "<p>" + pizzaPriceF() + "</p>" +
            "</div>");
    });

    $(".margh").on('change', function () {
        inputtedSize = $("#margh-size").val();
        inputtedTopping = $("#margh-toppings").val();
        inputtedCrust = $("#margh-crust").val();
        margheritaOrder = new margheritaPizza(inputtedSize, inputtedCrust, inputtedTopping);
        pizzaType = margheritaOrder.type;
        $("#margh-price").remove();
        $("#margh-card").append("<div id='margh-price'>" +
            "<p>" + pizzaPriceF() + "</p>" +
            "</div>");
    });

    $(".mtz").on('change', function () {
        inputtedSize = $("#mtz-size").val();
        inputtedTopping = $("#mtz-toppings").val();
        inputtedCrust = $("#mtz-crust").val();
        meatzzaOrder = new meatzzaPizza(inputtedSize, inputtedCrust, inputtedTopping);
        pizzaType = meatzzaOrder.type;
        $("#mtz-price").remove();
        $("#mtz-card").append("<div id='mtz-price'>" +
            "<p>" + pizzaPriceF() + "</p>" +
            "</div>");
    });




    $("form").submit(function () {
        event.preventDefault();


        location.href = "../checkout.html";
    });

});
var inputtedSize;
var inputtedTopping;
var inputtedCrust;
var pizzaPrice;

//BUSINESS LOGIC
//Pizza Object
function Pizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
}

//Price for Size
var pizzaSizePriceF = function () {
    var pizzaSizePrice;
    if (inputtedSize === "large") {
        pizzaSizePrice = 300;
    } else if (inputtedSize === "medium") {
        pizzaSizePrice = 200;
    } else if (inputtedSize === "small") {
        pizzaSizePrice = 100;
    }
    return pizzaSizePrice;
}

//Price for Crust
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


//Price for Toppings depending on Pizza Size
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
pizzaPrice = pizzaSizePriceF() + pizzaToppingPriceF() + pizzaCrustPriceF();
return pizzaPrice;
}

//UI LOGIC
$(document).ready(function () {


    //Get User Input for pizza preference
    $(".bbq_c").on('change',function () {
        inputtedSize = $("#bbq_c-size").val();
        inputtedTopping = $("#bbq_c-toppings").val();
        inputtedCrust = $("#bbq_c-crust").val();
        pizzaOrder = new Pizza(inputtedSize, inputtedCrust, inputtedTopping);
        $("#bbq_c-price").remove();
        $("#bbq_c-card").append("<div id='bbq_c-price'>" +
                  "<p>"+pizzaPriceF()+"</p>"+              
        "</div>");
    });

    $(".bbq_s").on('change',function () {
        inputtedSize = $("#bbq_s-size").val();
        inputtedTopping = $("#bbq_s-toppings").val();
        inputtedCrust = $("#bbq_s-crust").val();
        pizzaOrder = new Pizza(inputtedSize, inputtedCrust, inputtedTopping);
        $("#bbq_s-price").remove();
        $("#bbq_s-card").append("<div id='bbq_s-price'>" +
                  "<p>"+pizzaPriceF()+"</p>"+              
        "</div>");
    });

    $(".chk-tk").on('change',function () {
        inputtedSize = $("#chk_tk-size").val();
        inputtedTopping = $("#chk_tk-toppings").val();
        inputtedCrust = $("#chk_tk-crust").val();
        pizzaOrder = new Pizza(inputtedSize, inputtedCrust, inputtedTopping);
        $("#chk_tk-price").remove();
        $("#chk_tk-card").append("<div id='chk_tk-price'>" +
                  "<p>"+pizzaPriceF()+"</p>"+              
        "</div>");
    });

    $(".haw").on('change',function () {
        inputtedSize = $("#haw-size").val();
        inputtedTopping = $("#haw-toppings").val();
        inputtedCrust = $("#haw-crust").val();
        pizzaOrder = new Pizza(inputtedSize, inputtedCrust, inputtedTopping);
        $("#haw-price").remove();
        $("#haw-card").append("<div id='haw-price'>" +
                  "<p>"+pizzaPriceF()+"</p>"+              
        "</div>");
    });

    $(".margh").on('change',function () {
        inputtedSize = $("#margh-size").val();
        inputtedTopping = $("#margh-toppings").val();
        inputtedCrust = $("#margh-crust").val();
        pizzaOrder = new Pizza(inputtedSize, inputtedCrust, inputtedTopping);
        $("#margh-price").remove();
        $("#margh-card").append("<div id='margh-price'>" +
                  "<p>"+pizzaPriceF()+"</p>"+              
        "</div>");
    });

    $(".mtz").on('change',function () {
        inputtedSize = $("#mtz-size").val();
        inputtedTopping = $("#mtz-toppings").val();
        inputtedCrust = $("#mtz-crust").val();
        pizzaOrder = new Pizza(inputtedSize, inputtedCrust, inputtedTopping);
        $("#mtz-price").remove();
        $("#mtz-card").append("<div id='mtz-price'>" +
                  "<p>"+pizzaPriceF()+"</p>"+              
        "</div>");
    });




    $("form").submit(function () {
        event.preventDefault();


        location.href = "../checkout.html";
    });

});
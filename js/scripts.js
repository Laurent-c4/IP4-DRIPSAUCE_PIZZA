//BUSINESS LOGIC
var inputtedSize;
var inputtedTopping;
var inputtedCrust;
var pizzaPrice;
var pizzaType;
var pizzaDescription;
var totalPrice = 0;
var checkoutCount = 0;

var bbqCPreferences = [];
var bbqCPrices = [];
var bbqSPreferences = [];
var bbqSPrices = [];

sessionStorageValue1 = [];
sessionStorageValue2 = [];
sessionStorageValue3 = [];
sessionStorageValue4 = [];
sessionStorageValue5 = [];
sessionStorageValue6 = [];
sessionStorageValue7 = [];
sessionStorageValue8 = [];
sessionStorageValue9 = [];
sessionStorageValue10 = [];
sessionStorageValue11 = [];
sessionStorageValue12 = [];


//Create Pizza Objects
//BBQ Chicken Pizza
function bbqChickenPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "bbq_c";
}

bbqChickenPizza.prototype.description = function () {
    return this.type + " " + this.size + " " + this.crust + " " + this.topping;
}

//BBQ Steak Pizza
function bbqSteakPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "bbq_s";
}

bbqSteakPizza.prototype.description = function () {
    return this.type + " " + this.size + " " + this.crust + " " + this.topping;
}

//Chicken Tikka Pizza
function chickenTikkaPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "chk_tk";
}

chickenTikkaPizza.prototype.description = function () {
    return this.type + " " + this.size + " " + this.crust + " " + this.topping;
}

//Hawaiian Chicken Pizza
function hawaiianPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "haw";
}

hawaiianPizza.prototype.description = function () {
    return this.type + " " + this.size + " " + this.crust + " " + this.topping;
}

//Margherita Pizza
function margheritaPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "margh";
}

margheritaPizza.prototype.description = function () {
    return this.type + " " + this.size + " " + this.crust + " " + this.topping;
}

//Meatzza Pizza
function meatzzaPizza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "mtz";
}

meatzzaPizza.prototype.description = function () {
    return this.type + " " + this.size + " " + this.crust + " " + this.topping;
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

//Total Price
var pizzaPriceF = function () {
    pizzaPrice = pizzaSizePriceF() + pizzaToppingPriceF() + pizzaCrustPriceF() + pizzaTypePriceF();
    return pizzaPrice;
}



//UI LOGIC
$(document).ready(function () {
    //Get User Input for pizza preference and display pizza price
    $(".bbq_c").on('change', function () {
        inputtedSize = $("#bbq_c-size").val();
        inputtedTopping = $("#bbq_c-toppings").val();
        inputtedCrust = $("#bbq_c-crust").val();
        bbqChickenOrder = new bbqChickenPizza(inputtedSize, inputtedCrust, inputtedTopping);
        pizzaType = bbqChickenOrder.type;
        pizzaDescription = bbqChickenOrder.description();
        $("#bbq_c-price").remove();
        $("#bbq_c-card").append("<div id='bbq_c-price'>" +
            "<p>" + pizzaPriceF() + "</p>" +
            "</div>");
        x = pizzaPriceF();

    });

    $("#btn-bbq_c").click(function () {
        checkoutCount += 1
        sessionStorageValue1.push(x.toString());
        sessionStorage.setItem("bbq_c-price", JSON.stringify(sessionStorageValue1));
        sessionStorageValue2.push(pizzaDescription);
        sessionStorage.setItem("bbq_c-preference", JSON.stringify(sessionStorageValue2));
        $("#Checkout").remove();
        $("#CheckoutItem").append("<a class='nav-link' href='checkout.html' id='Checkout'>Checkout(" + checkoutCount + ")</a>");
    });

    $(".bbq_s").on('change', function () {
        inputtedSize = $("#bbq_s-size").val();
        inputtedTopping = $("#bbq_s-toppings").val();
        inputtedCrust = $("#bbq_s-crust").val();
        bbqSteakOrder = new bbqSteakPizza(inputtedSize, inputtedCrust, inputtedTopping);
        pizzaType = bbqSteakOrder.type;
        pizzaDescription = bbqSteakOrder.description();
        $("#bbq_s-price").remove();
        $("#bbq_s-card").append("<div id='bbq_s-price'>" +
            "<p>" + pizzaPriceF() + "</p>" +
            "</div>");
        y = pizzaPriceF();
    });

    $("#btn-bbq_s").click(function () {
        checkoutCount += 1
        sessionStorageValue3.push(y.toString());
        sessionStorage.setItem("bbq_s-price", JSON.stringify(sessionStorageValue3));
        sessionStorageValue4.push(pizzaDescription);
        sessionStorage.setItem("bbq_s-preference", JSON.stringify(sessionStorageValue4));
        $("#Checkout").remove();
        $("#CheckoutItem").append("<a class='nav-link' href='checkout.html' id='Checkout'>Checkout(" + checkoutCount + ")</a>");
    });

    $(".chk-tk").on('change', function () {
        inputtedSize = $("#chk_tk-size").val();
        inputtedTopping = $("#chk_tk-toppings").val();
        inputtedCrust = $("#chk_tk-crust").val();
        chickenTikkaOrder = new chickenTikkaPizza(inputtedSize, inputtedCrust, inputtedTopping);
        pizzaType = chickenTikkaOrder.type;
        pizzaDescription = chickenTikkaOrder.description();
        $("#chk_tk-price").remove();
        $("#chk_tk-card").append("<div id='chk_tk-price'>" +
            "<p>" + pizzaPriceF() + "</p>" +
            "</div>");
        z = pizzaPriceF();
    });

    $("#btn-chk_tk").click(function () {
        checkoutCount += 1
        sessionStorageValue5.push(z.toString());
        sessionStorage.setItem("chk_tk-price", JSON.stringify(sessionStorageValue5));
        sessionStorageValue6.push(pizzaDescription);
        sessionStorage.setItem("chk_tk-preference", JSON.stringify(sessionStorageValue6));
        $("#Checkout").remove();
        $("#CheckoutItem").append("<a class='nav-link' href='checkout.html' id='Checkout'>Checkout(" + checkoutCount + ")</a>");
    })

    $(".haw").on('change', function () {
        inputtedSize = $("#haw-size").val();
        inputtedTopping = $("#haw-toppings").val();
        inputtedCrust = $("#haw-crust").val();
        hawaiianOrder = new hawaiianPizza(inputtedSize, inputtedCrust, inputtedTopping);
        pizzaType = hawaiianOrder.type;
        pizzaDescription = hawaiianOrder.description();
        $("#haw-price").remove();
        $("#haw-card").append("<div id='haw-price'>" +
            "<p>" + pizzaPriceF() + "</p>" +
            "</div>");
        a = pizzaPriceF();
    });

    $("#btn-haw").click(function () {
        checkoutCount += 1
        sessionStorageValue7.push(a.toString());
        sessionStorage.setItem("haw-price", JSON.stringify(sessionStorageValue7));
        sessionStorageValue8.push(pizzaDescription);
        sessionStorage.setItem("haw-preference", JSON.stringify(sessionStorageValue8));
        $("#Checkout").remove();
        $("#CheckoutItem").append("<a class='nav-link' href='checkout.html' id='Checkout'>Checkout(" + checkoutCount + ")</a>");
    })

    $(".margh").on('change', function () {
        inputtedSize = $("#margh-size").val();
        inputtedTopping = $("#margh-toppings").val();
        inputtedCrust = $("#margh-crust").val();
        margheritaOrder = new margheritaPizza(inputtedSize, inputtedCrust, inputtedTopping);
        pizzaType = margheritaOrder.type;
        pizzaDescription = margheritaOrder.description();
        $("#margh-price").remove();
        $("#margh-card").append("<div id='margh-price'>" +
            "<p>" + pizzaPriceF() + "</p>" +
            "</div>");
        b = pizzaPriceF();
    });

    $("#btn-margh").click(function () {
        checkoutCount += 1
        sessionStorageValue9.push(b.toString());
        sessionStorage.setItem("margh-price", JSON.stringify(sessionStorageValue9));
        sessionStorageValue10.push(pizzaDescription);
        sessionStorage.setItem("margh-preference", JSON.stringify(sessionStorageValue10));
        $("#Checkout").remove();
        $("#CheckoutItem").append("<a class='nav-link' href='checkout.html' id='Checkout'>Checkout(" + checkoutCount + ")</a>");
    })

    $(".mtz").on('change', function () {
        inputtedSize = $("#mtz-size").val();
        inputtedTopping = $("#mtz-toppings").val();
        inputtedCrust = $("#mtz-crust").val();
        meatzzaOrder = new meatzzaPizza(inputtedSize, inputtedCrust, inputtedTopping);
        pizzaType = meatzzaOrder.type;
        pizzaDescription = meatzzaOrder.description();
        $("#mtz-price").remove();
        $("#mtz-card").append("<div id='mtz-price'>" +
            "<p>" + pizzaPriceF() + "</p>" +
            "</div>");
        c = pizzaPriceF();
    });

    $("#btn-mtz").click(function () {
        checkoutCount += 1
        sessionStorageValue11.push(c.toString());
        sessionStorage.setItem("mtz-price", JSON.stringify(sessionStorageValue11));
        sessionStorageValue12.push(pizzaDescription);
        sessionStorage.setItem("mtz-preference", JSON.stringify(sessionStorageValue12));
        $("#Checkout").remove();
        $("#CheckoutItem").append("<a class='nav-link' href='checkout.html' id='Checkout'>Checkout(" + checkoutCount + ")</a>");
    })


    $("form").submit(function () {
        event.preventDefault();
        location.href = "../checkout.html";
    });

    $("#btn-order_list").click(function () {
        bbqCPrices = (JSON.parse(sessionStorage.getItem("bbq_c-price")));
        bbqCPreferences = (JSON.parse(sessionStorage.getItem("bbq_c-preference")));
        try {
            for (i = 0; i < bbqCPrices.length; i++) {
                $("#order-checkout").append("<p> Pizza Ordered:" + bbqCPreferences[i] + "</p>");
                $("#order-checkout").append("<p> Price:" + bbqCPrices[i] + "</p>");
                totalPrice += parseInt(bbqCPrices[i]);
            }
        } catch (err) {
            console.log("Null length of array");
        }

        bbqSPrices = (JSON.parse(sessionStorage.getItem("bbq_s-price")));
        bbqSPreferences = (JSON.parse(sessionStorage.getItem("bbq_s-preference")));
        try {
            for (i = 0; i < bbqSPrices.length; i++) {
                $("#order-checkout").append("<p> Pizza Ordered:" + bbqSPreferences[i] + "</p>");
                $("#order-checkout").append("<p> Price:" + bbqSPrices[i] + "</p>");
                totalPrice += parseInt(bbqSPrices[i]);
            }
        } catch (err) {
            console.log("Null length of array");
        }

        chkTkPrices = (JSON.parse(sessionStorage.getItem("chk_tk-price")));
        chkTkPreferences = (JSON.parse(sessionStorage.getItem("chk_tk-preference")));
        try {
            for (i = 0; i < chkTkPrices.length; i++) {
                $("#order-checkout").append("<p> Pizza Ordered:" + chkTkPreferences[i] + "</p>");
                $("#order-checkout").append("<p> Price:" + chkTkPrices[i] + "</p>");
                totalPrice += parseInt(chkTkPrices[i]);
            }
        } catch (err) {
            console.log("Null length of array");
        }

        hawPrices = (JSON.parse(sessionStorage.getItem("haw-price")));
        hawPreferences = (JSON.parse(sessionStorage.getItem("haw-preference")));
        try {
            for (i = 0; i < hawPrices.length; i++) {
                $("#order-checkout").append("<p> Pizza Ordered:" + hawPreferences[i] + "</p>");
                $("#order-checkout").append("<p> Price:" + hawPrices[i] + "</p>");
                totalPrice += parseInt(hawPrices[i]);
            }
        } catch (err) {
            console.log("Null length of array");
        }

        marghPrices = (JSON.parse(sessionStorage.getItem("margh-price")));
        marghPreferences = (JSON.parse(sessionStorage.getItem("margh-preference")));
        try {
            for (i = 0; i < marghPrices.length; i++) {
                $("#order-checkout").append("<p> Pizza Ordered:" + marghPreferences[i] + "</p>");
                $("#order-checkout").append("<p> Price:" + marghPrices[i] + "</p>");
                totalPrice += parseInt(marghPrices[i]);
            }
        } catch (err) {
            console.log("Null length of array");
        }

        mtzPrices = (JSON.parse(sessionStorage.getItem("mtz-price")));
        mtzPreferences = (JSON.parse(sessionStorage.getItem("mtz-preference")));
        try {
            for (i = 0; i < mtzPrices.length; i++) {
                $("#order-checkout").append("<p> Pizza Ordered:" + mtzPreferences[i] + "</p>");
                $("#order-checkout").append("<p> Price:" + mtzPrices[i] + "</p>");
                totalPrice += parseInt(mtzPrices[i]);
            }
        } catch (err) {
            console.log("Null length of array");
        }

        $("#order-checkout").append("<p>Total:" + totalPrice + "</p>")
    });

    $("#btn-pay").click(function () {
        sessionStorage.clear();
        bbqCPrices = [];
        bbqCPreferences = [];
        bbqSPreferences = [];
        bbqSPrices = [];
        location.href = "../checkout.html";
        alert("Thanks");
    });

});
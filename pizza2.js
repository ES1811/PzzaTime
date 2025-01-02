function orderPizza(pizzaType) {
    console.log(`1- Ordered pizza with ${pizzaType}`);
    }
    function waitPizza(pizzaType, callback) {
    setTimeout(() => {
    console.log(`2- Pizza with ${pizzaType} came`);
    callback(pizzaType);
    }, 3000);
    }
    function eatPizza(pizzaType) {
    console.log(`3- I can eat my pizza ${pizzaType}`);
    }
    
    let myFavorite = "Salami";
    orderPizza(myFavorite);
    waitPizza(myFavorite, eatPizza);
    //eatPizza(myFavorite); can comment this out

    //this time using callback function to make the thing work :)
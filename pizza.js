function orderPizza(pizzaType) {
    console.log(`1- Ordered pizza with ${pizzaType}`);
    }
    function waitPizza(pizzaType) {
    setTimeout(() => {
    console.log(`2- Pizza with ${pizzaType} came`);
    }, 3000);
    }
    function eatPizza(pizzaType) {
    setTimeout(() => {
    console.log(`3- I can eat my pizza ${pizzaType}`);
    }, 4500);
    }
    
    let myFavorite = "Salami";
    orderPizza(myFavorite);
    waitPizza(myFavorite);
    eatPizza(myFavorite);

/* 
1. Explain why the code is not working correctly.
- Why does the message "I can eat my pizza Salami" appear before "Pizza with
Salami came"?

The answer is because there's a setTimeout to 3 seconds on waitPizza(), which causes eatPizza() to happen first.

The solution: can add setTimeout() to eatPizza as well, make it 4-5 seconds, therefore forcing the Pizza to come first
before it can eaten
*/
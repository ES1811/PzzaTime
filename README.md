# Pizza order

The problem: Pizza can be eaten before it arrives.

1. Explain why the code is not working correctly.
- Why does the message "I can eat my pizza Salami" appear before "Pizza with
Salami came"?

The answer is because there's a setTimeout to 3 seconds on waitPizza(), which causes eatPizza() to happen first.

The solution: can add setTimeout() to eatPizza as well, make it 4-5 seconds (in this case I've put 4,5 seconds), therefore forcing the Pizza to come first
before it can eaten

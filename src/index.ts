import { Controller as CoffeeController } from "./coffee/controller.ts";

const coffeeController = new CoffeeController({
    coffeeRepository: {
        getAll: async () => []
    }
});

console.log(await coffeeController.getAll());
import {
  Controller as CoffeeController,
  Repository as CoffeeRepository,
} from "./coffee/index.ts";

import { Roast } from "./coffee/index.js";

const coffeeRepository = new CoffeeRepository();
coffeeRepository.storage.set("d1afa50e-78d1-4c7c-8284-237c346d7c34", {
    id: "d1afa50e-78d1-4c7c-8284-237c346d7c34",
    name: "Cappuccino",
    roast: Roast.TYPICAL,
    origin: "Italy",
    notes: "Great cup in the morning",
    price: 4,
    caffeineContent: 1.4,
    isOrganic: true,
    isFairTrade: true,
    rating: 4.5,
    // getCaffeineContent: function (): number | null {
    //     throw new Error("Function not implemented.");
    // },
    // setCaffeineContent: function (content: number): void | null {
    //     throw new Error("Function not implemented.");
    // },
    // getRating: function (): number | null {
    //     throw new Error("Function not implemented.");
    // },
    // setRating: function (rating: number): void | null {
    //     throw new Error("Function not implemented.");
    // }
});
const coffeeController = new CoffeeController({
  coffeeRepository,
});

console.log(await coffeeController.getAll());

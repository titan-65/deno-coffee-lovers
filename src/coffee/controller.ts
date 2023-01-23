import type { Coffee, CoffeeController, CoffeeRepository } from "./types.ts";

interface ControllerDependencies {
    coffeeRepository: CoffeeRepository
}

export class Controller implements CoffeeController {
    coffeeRepository: CoffeeRepository;

    constructor({ coffeeRepository }: ControllerDependencies) {
        this.coffeeRepository = coffeeRepository;
    }

    async getAll() {
        return this.coffeeRepository.getAll();
    }
}
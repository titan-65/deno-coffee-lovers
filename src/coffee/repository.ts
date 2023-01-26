import type { Coffee, CoffeeRepository } from "./index.ts";

export class Repository implements CoffeeRepository {
    // private coffeeList: Coffee[] = [];

    // async getAll(): Promise<Coffee
    storage = new Map<string, Coffee>()

    async getAll(): Promise<Coffee[]> {
        return [...this.storage.values()];
    }
}
export type Coffee = {
  name: string;
  roast: Roast;
  origin: string;
  notes: string;
  price: number;
  caffeineContent: number;
  isOrganic: boolean;
  isFairTrade: boolean;
  rating: number;
  getCaffeineContent(): number;
  setCaffeineContent(content: number): void;
  getRating(): number;
  setRating(rating: number): void;
};


export enum Roast {
    TYPICAL = 'TYPICAL',
    BURGER_ROAST = 'BURGER_ROAST',
    MILKY_ROAST = 'MILKY_ROAST',
    RICE_ROAST = 'RICE_ROAST',
    CIDER_ROAST = 'CIDER_ROAST',
    POTATO_ROAST = 'POTATO_ROAST',
    CHICKEN_ROAST = 'CHICKEN_ROAST',
    FANCY_ROAST = 'FANCY_ROAST',
    CUDDLY_ROAST = 'CUDDLY_ROAST',
    SWEET_ROAST = 'SWEET_ROAST',
    SANDWICH_ROAST = 'SANDWICH_ROAST',
    SPICE_ROAST = 'SPICE_ROAST',
    THAI_ROAST = 'THAI_ROAST',
    BASIC_ROAST = 'BASIC_ROAST',
    FAST_ROAST = 'FAST_ROAST',
    COFFEE_ROAST = 'COFFEE_ROAST',

}

export interface CoffeeController {
    getAll: () => Promise<Coffee[]>;
    getById: (id: number) => Promise<Coffee>;
    getByName: (name: string) => Promise<Coffee>;
    getByOrigin: (origin: string) => Promise<Coffee>;
    add: (coffee: Coffee) => Promise<Coffee>;
    edit: (coffee: Coffee) => Promise<Coffee>;
    update: (coffee: Coffee) => Promise<Coffee>;
    destroy: (id: number) => Promise<Coffee>;
    deleteAll: () => Promise<void>;

}

export interface CoffeeRepository {
    getAll: () => Promise<Coffee[]>;
    getById: (id: number) => Promise<Coffee>;
    getByName: (name: string) => Promise<Coffee>;
    getByOrigin: (origin: string) => Promise<Coffee>;
    add: (coffee: Coffee) => Promise<Coffee>;
    edit: (coffee: Coffee) => Promise<Coffee>;
    update: (coffee: Coffee) => Promise<Coffee>;
    destroy: (id: number) => Promise<Coffee>;
    deleteAll: () => Promise<void>;

}


export enum OrderStatus {
    INITIAL = 'INITIAL',
    OPEN = 'OPEN',
    CANCELLED = 'CANCELLED',
    COMPLETED = 'COMPLETED',
    REFUNDED = 'REFUNDED',
    EXPIRED = 'EXPIRED',
    PAID = 'PAID',

}

// export interface Order {
//     id: number;
//     userId
// }
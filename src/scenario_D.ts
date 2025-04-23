// Design Pattern : Decorateur

interface Boissons {
    getDescription(): string;
    getCost(): number;
}

class Coffee implements Boissons {
    getDescription(): string {
        return "Cafe";
    }
    getCost(): number {
        return 4.0;
    }
}

abstract class BoissonDecorator implements Boissons {
    protected boisson: Boissons;
    
    constructor(boisson : Boissons){
        this.boisson = boisson;
    }

    abstract getDescription(): string;
    abstract getCost(): number;
}

// deno-lint-ignore no-unused-vars
class Lait extends BoissonDecorator {
    constructor (boisson : Boissons) {  
        super(boisson);
    }
    getDescription(): string {
        return this.boisson.getDescription() + ", Lait";
    }
    getCost(): number {
        return this.boisson.getCost() + 1.0;
    }
}

class LaitCoco extends BoissonDecorator {
    constructor (boisson : Boissons) {  
        super(boisson);
    }
    getDescription(): string {
        return this.boisson.getDescription() + ", Lait Coco";
    }
    getCost(): number {
        return this.boisson.getCost() + 2.0;
    }
}

class Chantilly extends BoissonDecorator {
    constructor (boisson : Boissons) {  
        super(boisson);
    }
    getDescription(): string {
        return this.boisson.getDescription() + ", Chantilly";
    }  
    getCost(): number {
        return this.boisson.getCost() + 1.0;
    }
}

class Vanille extends BoissonDecorator {
    constructor (boisson : Boissons) {  
        super(boisson);
    }
    getDescription(): string {
        return this.boisson.getDescription() + ", Vanille";
    }  
    getCost(): number {
        return this.boisson.getCost() + 0.5;
    }
}

class Sucre extends BoissonDecorator {  
    constructor (boisson : Boissons){
        super(boisson);
    }
    getDescription(): string {
      return this.boisson.getDescription() + ", Sucre";
    }
    getCost(): number {
        return this.boisson.getCost() + 0.0;
    }
}

function main(): void {
    // Café simple
    // deno-lint-ignore prefer-const
    let coffee: Boissons = new Coffee();
    console.log(`Boisson : ${coffee.getDescription()}`);
    console.log(`Coût : ${coffee.getCost()}€\n`);

    // Café avec Lait de coco, Chantilly, Saveur Vanille
    let customCoffee: Boissons = new Coffee();
    customCoffee = new LaitCoco(customCoffee);
    customCoffee = new Chantilly(customCoffee);
    customCoffee = new Vanille(customCoffee);
    console.log(`Boisson : ${customCoffee.getDescription()}`);
    console.log(`Coût : ${customCoffee.getCost()}€\n`);

    // Café avec Chantilly, Saveur Vanille, Sucre
    let anotherCoffee: Boissons = new Coffee();
    anotherCoffee = new Chantilly(anotherCoffee);
    anotherCoffee = new Vanille(anotherCoffee);
    anotherCoffee = new Sucre(anotherCoffee);
    console.log(`Boisson : ${anotherCoffee.getDescription()}`);
    console.log(`Coût : ${anotherCoffee.getCost()}€\n`);

    // Café avec Lait de coco et Saveur Vanille
    let yetAnotherCoffee: Boissons = new Coffee();
    yetAnotherCoffee = new LaitCoco(yetAnotherCoffee);
    yetAnotherCoffee = new Vanille(yetAnotherCoffee);
    console.log(`Boisson : ${yetAnotherCoffee.getDescription()}`);
    console.log(`Coût : ${yetAnotherCoffee.getCost()}€`);
}

// Exécuter le programme
main();
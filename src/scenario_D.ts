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


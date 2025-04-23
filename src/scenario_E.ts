// Design Pattern : Fabrique

interface Personnage {
    attack():void;
}

class Guerrier implements Personnage {
    attack(): void {
      console.log("Le guerrier utilise Berserk et fonce dans le tas... de ses alliés")
    }
} 

class Magicien implements Personnage {
    attack(): void {
      console.log("Le magicien commence à scander une incantation dans une langue inconnue... ah non il éternue juste")
    }
}

class Archer implements Personnage {
    attack(): void {
      console.log("L'archer bande... son arc")
    }
}

abstract class PersonnageFactory {
    abstract createPersonnage(type: string): Personnage;
}

class ConcretePersonnageFactory extends PersonnageFactory {
    createPersonnage(type: string): Personnage {
      switch (type) {
        case "Guerrier":
          return new Guerrier();
        case "Magicien":
          return new Magicien();
        case "Archer":
          return new Archer();
        default:
          throw new Error(`Type de personnage inconnu : ${type}`);
        }
    }
}

function main(): void {
    // Création de la factory
    const factory: PersonnageFactory = new ConcretePersonnageFactory();

    // Création et test des personnages
    try {
        console.log("Création des personnages :");

        const warrior: Personnage = factory.createPersonnage("warrior");
        warrior.attack();

        const wizard: Personnage = factory.createPersonnage("wizard");
        wizard.attack();

        const archer: Personnage = factory.createPersonnage("archer");
        archer.attack();

        // Test avec un type inconnu
        // deno-lint-ignore no-unused-vars
        const unknown: Personnage = factory.createPersonnage("priest");
    } catch (error) {
        console.log(`Erreur : ${(error as Error).message}`);
    }
}

// Exécuter le programme
main();
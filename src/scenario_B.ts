// Design Pattern : Composite

interface Component {
    display(indentLevel?: number):void;
}

class Employe implements Component {
    private name : string;
    private role : string;

    constructor(name : string, role : string) {
        this.name = name;
        this.role = role;
    }

    public display(indentLevel: number = 0): void {
        console.log(`${" ".repeat(indentLevel*2)}- Employé: ${this.name} (${this.role})`);
    }
}

class Departement implements Component {
    private name : string;
    private composants : Component[] = [];

    constructor(name : string) {
        this.name = name;
    }

    public add(component : Component) : void {
        this.composants.push(component);
    }

    public remove(component : Component) : void {
        const index = this.composants.indexOf(component);
        if (index !== -1) {
            this.composants.splice(index, 1);
        }
    }

    public display(indentLevel: number = 0): void {
        console.log(`${" ".repeat(indentLevel*2)}- Departement: ${this.name}`);
        for (const component of this.composants) {
            component.display(indentLevel +1);
        }
    }
}

function main(): void {
    // Création de la Direction Générale
    const directionGenerale = new Departement("Direction Générale");

    // Secrétariat général
    const secretariat = new Departement("Secrétariat général");
    secretariat.add(new Employe("Alice Martin", "Secrétaire générale"));
    secretariat.add(new Employe("Bob Dupont", "Assistant"));

    // Département technique
    const deptTechnique = new Departement("Département technique");
    const it = new Departement("IT");
    it.add(new Employe("Charlie Brown", "Développeur"));
    it.add(new Employe("Diana Lee", "Administrateur système"));
    const web = new Departement("Web");
    web.add(new Employe("Eve Taylor", "Développeur web"));
    deptTechnique.add(it);
    deptTechnique.add(web);

    // Département commercial
    const deptCommercial = new Departement("Département commercial");
    const ventes = new Departement("Ventes");
    ventes.add(new Employe("Frank Wilson", "Commercial"));
    const achats = new Departement("Achats");
    achats.add(new Employe("Grace Kim", "Responsable achats"));
    deptCommercial.add(ventes);
    deptCommercial.add(achats);

    // Département financier
    const deptFinancier = new Departement("Département financier");
    const rh = new Departement("RH");
    rh.add(new Employe("Henry Davis", "Chargé RH"));
    const comptabilite = new Departement("Comptabilité");
    comptabilite.add(new Employe("Isabella Moore", "Comptable"));
    const administration = new Departement("Administration");
    administration.add(new Employe("James Clark", "Administrateur"));
    deptFinancier.add(rh);
    deptFinancier.add(comptabilite);
    deptFinancier.add(administration);

    // Ajout des départements à la Direction Générale
    directionGenerale.add(secretariat);
    directionGenerale.add(deptTechnique);
    directionGenerale.add(deptCommercial);
    directionGenerale.add(deptFinancier);

    // Affichage de l'organigramme
    console.log("Organigramme de l'entreprise :");
    directionGenerale.display();
}

// Exécuter le programme
main();
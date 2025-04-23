// Design Pattern : Adaptateur 

interface ControlerActions {
    sauter():void
    attaquer():void
    interragir():void
}

class KeyboardController {
    pressSpace(): void {
        console.log("Sauter");
    }
    pressLeftClick(): void {
        console.log("Attaquer");
    }
    pressRightClick(): void {
        console.log("Interragir");
    }
}

class XboxController {
    pressA(): void {
        console.log("Sauter");
    }
    pressB(): void {
        console.log("Attaquer");
    }
    pressX(): void {
        console.log("Interragir");
    }
}

class PlaystationController {
    pressX(): void{
        console.log("Sauter");
    }
    pressO(): void{
        console.log("Attaquer");
    }
    pressTriangle(): void{
        console.log("Interragir");
    }
}

class KeyboardAdapter implements ControlerActions {
    private keyboard : KeyboardController;

    constructor(keyboard : KeyboardController) {
        this.keyboard = keyboard;
    }

    sauter(): void {
        this.keyboard.pressSpace();
    }

    attaquer(): void {
        this.keyboard.pressLeftClick();
    }

    interragir(): void {
      this.keyboard.pressRightClick();
    }
}

class XboxAdapter implements ControlerActions {
    private xbox : XboxController;

    constructor(xbox : XboxController) {
        this.xbox = xbox;
    }

    sauter(): void {
        this.xbox.pressA();
    }

    attaquer(): void {
        this.xbox.pressB();
    }

    interragir(): void {
        this.xbox.pressX();
    }
}

class PlaystationAdapter implements ControlerActions {
    private playstation : PlaystationController;

    constructor(playstation : PlaystationController) {
        this.playstation = playstation;
    }

    sauter(): void {
        this.playstation.pressX();
    }

    attaquer(): void {
        this.playstation.pressO();
    }

    interragir(): void {
        this.playstation.pressTriangle();
    }
}

class Game {
    private controller : ControlerActions;

    constructor(controller : ControlerActions) {
        this.controller = controller;
    }

    performActions():void {
        console.log("Performing actions");
        this.controller.sauter();
        this.controller.attaquer();
        this.controller.interragir();
    }
}

function main(): void {
    // Test avec le Clavier
    const keyboard = new KeyboardController();
    const keyboardAdapter = new KeyboardAdapter(keyboard);
    const gameWithKeyboard = new Game(keyboardAdapter);
    console.log("=== Test avec Clavier ===");
    gameWithKeyboard.performActions();

    // Test avec la manette Xbox
    const xbox = new XboxController();
    const xboxAdapter = new XboxAdapter(xbox);
    const gameWithXbox = new Game(xboxAdapter);
    console.log("\n=== Test avec Manette Xbox ===");
    gameWithXbox.performActions();

    // Test avec la manette PS5
    const ps5 = new PlaystationController();
    const ps5Adapter = new PlaystationAdapter(ps5);
    const gameWithPS5 = new Game(ps5Adapter);
    console.log("\n=== Test avec Manette PS5 ===");
    gameWithPS5.performActions();
}

// Exécuter le programme
main();
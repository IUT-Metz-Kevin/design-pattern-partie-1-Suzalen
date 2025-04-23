// Design Pattern : Singelton; Gestionnaire de Paramètres de Jeu

class GameSettings {
    private static instance : GameSettings | null = null;

    public difficulty : string;
    public langue : string;
    public volumeMusic : number;
    public volumeSFX : number;
    public screenRes : string;
    public quality : string;

    private constructor() {
        this.difficulty = "Normal";
        this.langue = "English";
        this.volumeMusic = 50;
        this.volumeSFX = 50;
        this.screenRes = "1920x1080";
        this.quality = "Medium";
    }

    public static getInstance() : GameSettings {
        if (GameSettings.instance == null) {
            GameSettings.instance = new GameSettings();
        }
        return GameSettings.instance;
    }

    public saveSettings() : void {
        console.log("Settings savec");
    }
}

// Exemple d'utilisation
const settings = GameSettings.getInstance();
console.log(`Difficulty: ${settings.difficulty}`); // Difficulty: Normal
settings.volumeMusic = 0.3;
settings.saveSettings(); // Settings saved.
export class Joke {

    public static incrementarId:number = 0;
    public id:number;
    public setup: string;
    public punchline: string;
    public hide: boolean;

    constructor(setup: string, punchline: string) {
        this.id = Joke.incrementarId;
        Joke.incrementarId++;
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }
    
    toggle() {
    this.hide = !this.hide;
    }

}

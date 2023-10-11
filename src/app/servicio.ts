import { Joke } from "./joke";

export class Servicio {

    jokes: Joke[];


    constructor(){
  
      this.jokes = [
        new Joke('¿Cuál es la bebida alcohólica preferida de un programador?','El JLabel.'),
        new Joke('¿Sabes que existen 10 tipos de personas?','Los que saben binario y los que no.'),
        new Joke('¿Por qué el software se parece a la iglesia?','Porque primero lo construimos y luego rezamos.')
      ];
    }
  
    agregarNuevaBroma(joke: Joke){
      this.jokes.unshift(joke);
    }

    eliminarUnaBroma(joke: Joke){
      
      for (let index = 0; index < this.jokes.length; index++) {
        if (joke.id === this.jokes[index].id) {
          this.jokes.splice(index,1)
        }
      }

    }

}

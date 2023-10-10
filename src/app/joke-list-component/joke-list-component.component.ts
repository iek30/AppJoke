import { Component, Input, Output } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke-list-component',
  templateUrl: './joke-list-component.component.html',
  styleUrls: ['./joke-list-component.component.css']
})
export class JokeListComponentComponent {

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




}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke',
  templateUrl: './joke-component.component.html',
  styleUrls: ['./joke-component.component.css']
})
export class JokeComponentComponent {
  @Input() joke!: Joke;
  @Input() jokes!: Joke[];

  eliminarUnaBroma(joke: Joke){
    const index = this.jokes.indexOf(joke);
    if (index !== -1) {
      this.jokes.splice(index, 1);
    }
  }


  modificarUnaBroma(joke: Joke, frase:string, respuesta:string){
    const index = this.jokes.indexOf(joke);
    this.jokes[index].punchline = respuesta;
    this.jokes[index].setup = frase;
  }
}

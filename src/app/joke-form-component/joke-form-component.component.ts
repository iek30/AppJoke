import { Component, EventEmitter, Output } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke-form-component',
  templateUrl: './joke-form-component.component.html',
  styleUrls: ['./joke-form-component.component.css']
})
export class JokeFormComponentComponent {

  @Output() jokeCreated = new EventEmitter<any>();

  crearBroma(pregunta:string, respuesta:string) {
    this.jokeCreated.emit(new Joke(pregunta, respuesta));
  }

}

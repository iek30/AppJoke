import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeListComponentComponent } from './joke-list-component/joke-list-component.component';
import { JokeComponentComponent } from './joke-component/joke-component.component';
import { JokeFormComponentComponent } from './joke-form-component/joke-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponentComponent,
    JokeComponentComponent,
    JokeFormComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

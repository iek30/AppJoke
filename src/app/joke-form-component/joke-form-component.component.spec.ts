import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeFormComponentComponent } from './joke-form-component.component';

describe('JokeFormComponentComponent', () => {
  let component: JokeFormComponentComponent;
  let fixture: ComponentFixture<JokeFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JokeFormComponentComponent]
    });
    fixture = TestBed.createComponent(JokeFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitJokesComponent } from './submit-jokes.component';

describe('SubmitJokesComponent', () => {
  let component: SubmitJokesComponent;
  let fixture: ComponentFixture<SubmitJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitJokesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

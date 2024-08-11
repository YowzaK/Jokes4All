import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerateJokesComponent } from './moderate-jokes.component';

describe('ModerateJokesComponent', () => {
  let component: ModerateJokesComponent;
  let fixture: ComponentFixture<ModerateJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModerateJokesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModerateJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

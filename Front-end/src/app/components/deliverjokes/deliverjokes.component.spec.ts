import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverjokesComponent } from './deliverjokes.component';

describe('DeliverjokesComponent', () => {
  let component: DeliverjokesComponent;
  let fixture: ComponentFixture<DeliverjokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverjokesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverjokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPizzaComponent } from './all-pizza.component';

describe('AllPizzaComponent', () => {
  let component: AllPizzaComponent;
  let fixture: ComponentFixture<AllPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPizzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

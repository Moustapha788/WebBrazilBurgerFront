import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosingDrinkComponent } from './choosing-drink.component';

describe('ChoosingDrinkComponent', () => {
  let component: ChoosingDrinkComponent;
  let fixture: ComponentFixture<ChoosingDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosingDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosingDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

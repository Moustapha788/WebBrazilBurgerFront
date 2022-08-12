import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDeliveringComponent } from './row-delivering.component';

describe('RowDeliveringComponent', () => {
  let component: RowDeliveringComponent;
  let fixture: ComponentFixture<RowDeliveringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowDeliveringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowDeliveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

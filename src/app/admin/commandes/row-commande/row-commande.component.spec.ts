import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowCommandeComponent } from './row-commande.component';

describe('RowCommandeComponent', () => {
  let component: RowCommandeComponent;
  let fixture: ComponentFixture<RowCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

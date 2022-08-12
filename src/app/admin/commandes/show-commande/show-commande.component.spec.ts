import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCommandeComponent } from './show-commande.component';

describe('ShowCommandeComponent', () => {
  let component: ShowCommandeComponent;
  let fixture: ComponentFixture<ShowCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

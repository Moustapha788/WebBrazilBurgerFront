import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProductCardComponent } from './similar-product-card.component';

describe('SimilarProductCardComponent', () => {
  let component: SimilarProductCardComponent;
  let fixture: ComponentFixture<SimilarProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

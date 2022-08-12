import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLivreurComponent } from './detail-livreur.component';

describe('DetailLivreurComponent', () => {
  let component: DetailLivreurComponent;
  let fixture: ComponentFixture<DetailLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLivreurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

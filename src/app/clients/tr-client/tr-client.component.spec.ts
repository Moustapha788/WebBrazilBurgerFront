import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrClientComponent } from './tr-client.component';

describe('TrClientComponent', () => {
  let component: TrClientComponent;
  let fixture: ComponentFixture<TrClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

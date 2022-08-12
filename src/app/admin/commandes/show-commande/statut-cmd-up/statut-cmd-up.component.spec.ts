import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutCmdUpComponent } from './statut-cmd-up.component';

describe('StatutCmdUpComponent', () => {
  let component: StatutCmdUpComponent;
  let fixture: ComponentFixture<StatutCmdUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatutCmdUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatutCmdUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

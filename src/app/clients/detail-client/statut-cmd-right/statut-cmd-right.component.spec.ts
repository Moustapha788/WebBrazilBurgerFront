import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutCmdRightComponent } from './statut-cmd-right.component';

describe('StatutCmdRightComponent', () => {
  let component: StatutCmdRightComponent;
  let fixture: ComponentFixture<StatutCmdRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatutCmdRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatutCmdRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

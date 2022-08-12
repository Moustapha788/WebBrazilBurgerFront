import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutCmdDownComponent } from './statut-cmd-down.component';

describe('StatutCmdDownComponent', () => {
  let component: StatutCmdDownComponent;
  let fixture: ComponentFixture<StatutCmdDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatutCmdDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatutCmdDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

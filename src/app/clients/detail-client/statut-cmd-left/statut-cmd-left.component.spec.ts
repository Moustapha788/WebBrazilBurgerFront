import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutCmdLeftComponent } from './statut-cmd-left.component';

describe('StatutCmdLeftComponent', () => {
  let component: StatutCmdLeftComponent;
  let fixture: ComponentFixture<StatutCmdLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatutCmdLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatutCmdLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

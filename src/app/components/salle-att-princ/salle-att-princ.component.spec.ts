import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleAttPrincComponent } from './salle-att-princ.component';

describe('SalleAttPrincComponent', () => {
  let component: SalleAttPrincComponent;
  let fixture: ComponentFixture<SalleAttPrincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleAttPrincComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleAttPrincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

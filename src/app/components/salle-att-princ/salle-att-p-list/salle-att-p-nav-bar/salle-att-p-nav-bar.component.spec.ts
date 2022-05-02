import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleAttPNavBarComponent } from './salle-att-p-nav-bar.component';

describe('SalleAttPNavBarComponent', () => {
  let component: SalleAttPNavBarComponent;
  let fixture: ComponentFixture<SalleAttPNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleAttPNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleAttPNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsNavBarComponent } from './patients-nav-bar.component';

describe('PatientsNavBarComponent', () => {
  let component: PatientsNavBarComponent;
  let fixture: ComponentFixture<PatientsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

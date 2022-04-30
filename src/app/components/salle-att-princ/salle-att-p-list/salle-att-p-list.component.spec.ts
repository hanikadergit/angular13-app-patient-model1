import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleAttPListComponent } from './salle-att-p-list.component';

describe('SalleAttPListComponent', () => {
  let component: SalleAttPListComponent;
  let fixture: ComponentFixture<SalleAttPListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleAttPListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleAttPListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

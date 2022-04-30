import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleAttPItemComponent } from './salle-att-p-item.component';

describe('SalleAttPItemComponent', () => {
  let component: SalleAttPItemComponent;
  let fixture: ComponentFixture<SalleAttPItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleAttPItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleAttPItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

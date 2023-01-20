import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandGestionComponent } from './brand-gestion.component';

describe('BrandGestionComponent', () => {
  let component: BrandGestionComponent;
  let fixture: ComponentFixture<BrandGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandGestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

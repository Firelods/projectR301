import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGestionComponent } from './product-gestion.component';

describe('ProductGestionComponent', () => {
  let component: ProductGestionComponent;
  let fixture: ComponentFixture<ProductGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDialogUpdateComponent } from './product-dialog-update.component';

describe('ProductDialogUpdateComponent', () => {
  let component: ProductDialogUpdateComponent;
  let fixture: ComponentFixture<ProductDialogUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDialogUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

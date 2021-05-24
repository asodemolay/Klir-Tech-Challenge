import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsToBuyComponent } from './products-to-buy.component';

describe('ProductsToBuyComponent', () => {
  let component: ProductsToBuyComponent;
  let fixture: ComponentFixture<ProductsToBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsToBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsToBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

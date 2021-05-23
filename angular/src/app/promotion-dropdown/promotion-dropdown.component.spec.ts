import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionDropdownComponent } from './promotion-dropdown.component';

describe('PromotionDropdownComponent', () => {
  let component: PromotionDropdownComponent;
  let fixture: ComponentFixture<PromotionDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

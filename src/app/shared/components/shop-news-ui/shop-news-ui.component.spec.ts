import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNewsUiComponent } from './shop-news-ui.component';

describe('ShopNewsUiComponent', () => {
  let component: ShopNewsUiComponent;
  let fixture: ComponentFixture<ShopNewsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopNewsUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopNewsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

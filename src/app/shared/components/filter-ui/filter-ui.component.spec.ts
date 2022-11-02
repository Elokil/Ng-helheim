import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterUiComponent } from './filter-ui.component';

describe('FilterUiComponent', () => {
  let component: FilterUiComponent;
  let fixture: ComponentFixture<FilterUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

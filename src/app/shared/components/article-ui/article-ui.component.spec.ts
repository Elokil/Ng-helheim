import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleUiComponent } from './article-ui.component';

describe('ArticleUiComponent', () => {
  let component: ArticleUiComponent;
  let fixture: ComponentFixture<ArticleUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleUneUiComponent } from './article-une-ui.component';

describe('ArticleUneUiComponent', () => {
  let component: ArticleUneUiComponent;
  let fixture: ComponentFixture<ArticleUneUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleUneUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleUneUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

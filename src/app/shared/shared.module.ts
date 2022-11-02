import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { TwitchButtonComponent } from './components/twitch-button/twitch-button.component';
import { ProductUiComponent } from './components/product-ui/product-ui.component';
import { ArticleUiComponent } from './components/article-ui/article-ui.component';
import { ArticleUneUiComponent } from './components/article-une-ui/article-une-ui.component';
import { ShopNewsUiComponent } from './components/shop-news-ui/shop-news-ui.component';
import { FilterUiComponent } from './components/filter-ui/filter-ui.component';


@NgModule({
  declarations: [
    ButtonComponent,
    TwitchButtonComponent,
    ProductUiComponent,
    ArticleUiComponent,
    ArticleUneUiComponent,
    ShopNewsUiComponent,
    FilterUiComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ButtonComponent,
    TwitchButtonComponent,
    ProductUiComponent,
    ArticleUiComponent,
    ArticleUneUiComponent,
    ShopNewsUiComponent,
    FilterUiComponent
  ]
})
export class SharedModule { }

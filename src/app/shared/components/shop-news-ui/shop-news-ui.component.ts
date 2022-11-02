import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-news-ui',
  templateUrl: './shop-news-ui.component.html',
  styleUrls: ['./shop-news-ui.component.sass']
})
export class ShopNewsUiComponent implements OnInit {
  @Input() imgUrl !: string;
  @Input() title !: string;

  constructor() { }

  ngOnInit(): void {
  }

}

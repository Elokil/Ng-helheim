import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-ui',
  templateUrl: './product-ui.component.html',
  styleUrls: ['./product-ui.component.sass']
})
export class ProductUiComponent implements OnInit {
  @Input() price!:number;
  @Input() name!:string;
  @Input() imgUrl!:string;

  constructor() { }

  ngOnInit(): void {
  }

}

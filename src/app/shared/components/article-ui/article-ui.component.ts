import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-ui',
  templateUrl: './article-ui.component.html',
  styleUrls: ['./article-ui.component.sass']
})
export class ArticleUiComponent implements OnInit {
  @Input() title!:string;
  @Input() author!:string;
  @Input() comment!:number;
  @Input() imgUrl !:string;

  constructor() { }

  ngOnInit(): void {
  }

}

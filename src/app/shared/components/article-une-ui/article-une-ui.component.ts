import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-une-ui',
  templateUrl: './article-une-ui.component.html',
  styleUrls: ['./article-une-ui.component.sass']
})
export class ArticleUneUiComponent implements OnInit {
  @Input() title!:string;
  @Input() author!:string;
  @Input() comment!:number;
  @Input() imgUrl !:string;

  constructor() { }

  ngOnInit(): void {
  }

}

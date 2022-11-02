import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-ui',
  templateUrl: './filter-ui.component.html',
  styleUrls: ['./filter-ui.component.sass']
})
export class FilterUiComponent implements OnInit {
  @Input() name !: string;
  constructor() { }

  ngOnInit(): void {
  }

}

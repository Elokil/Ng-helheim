import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twitch-button',
  templateUrl: './twitch-button.component.html',
  styleUrls: ['./twitch-button.component.sass']
})
export class TwitchButtonComponent implements OnInit {
  @Input() name!:string;
  @Input() link!:string;
  @Input() profilPicture !:string;
  @Input() onAir !:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

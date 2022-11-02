import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { TwitchButtonComponent } from './components/twitch-button/twitch-button.component';


@NgModule({
  declarations: [
    ButtonComponent,
    TwitchButtonComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ButtonComponent,
    TwitchButtonComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemperaturesPage } from './temperatures';

@NgModule({
  declarations: [
    TemperaturesPage,
  ],
  imports: [
    IonicPageModule.forChild(TemperaturesPage),
  ],
})
export class TemperaturesPageModule {}

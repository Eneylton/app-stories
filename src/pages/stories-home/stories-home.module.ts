import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoriesHomePage } from './stories-home';

@NgModule({
  declarations: [
    StoriesHomePage,
  ],
  imports: [
    IonicPageModule.forChild(StoriesHomePage),
  ],
})
export class StoriesHomePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllTripPage } from './all-trip';

@NgModule({
  declarations: [
    AllTripPage,
  ],
  imports: [
    IonicPageModule.forChild(AllTripPage),
  ],
})
export class AllTripPageModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AllTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-trip',
  templateUrl: 'all-trip.html',
})
export class AllTripPage {
  tripArray = [
    {trip:'Samutprakarn',route:'assets/imgs/spk.png'},
    {trip:'ChiengRai',route:'assets/imgs/chr.png'}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllTripPage');
  }

  //show
  show(item){
    //console.log(item);
    this.navCtrl.push("TripDetailPage",item);
  }

  createTrip(){
    this.navCtrl.push("CreateTripPage");
  }
}

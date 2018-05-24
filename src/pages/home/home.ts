import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//  message:string = "";
  constructor(public navCtrl: NavController) {

  }
  signIn(username,password){
    if(username== 'admin'){
      this.navCtrl.push("AllTripPage");
    } else{
      alert("Username is wrong");
    }
  }
}

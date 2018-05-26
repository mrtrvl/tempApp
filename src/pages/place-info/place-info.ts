import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlaceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place-info',
  templateUrl: 'place-info.html',
})
export class PlaceInfoPage {

  place: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.place = { id: '', name: '', description: ''};
  }

  ionViewDidLoad() {
    let place = this.navParams.get('place');

    if(typeof(place) !== 'undefined') {
      this.place = place;
    }

    console.log(this.place);
  }

  addSensor() {
    console.log('Add sensor');
  }

  editSensor() {
    console.log('Edit sensor');
  }

  sensorInfo() {
    console.log('Sensor info');
  }

  addRelay() {
    console.log('Add relay');
  }

  editRelay() {
    console.log('Edit relay');
  }

  relayInfo() {
    console.log('Relay info');
  }

}

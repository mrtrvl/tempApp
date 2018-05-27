import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

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
  sensor: any;
  sensors: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.place = {id: '', name: '', description: ''};
  }

  ionViewDidLoad() {
    let place = this.navParams.get('place');

    if(typeof(place) !== 'undefined') {
      this.place = place;
    }

    this.sensors = this.dataProvider.getSensorsOfPlaceById(this.place.id);
    console.log(`Sensors: ${ this.sensors }`);
  }

  addSensor() {
    this.dataProvider.addSensor({
      name: this.place.name + 'Veetoru',
      description: 'Magamistoa alune veetoru',
      placeId: this.place.id
    });
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

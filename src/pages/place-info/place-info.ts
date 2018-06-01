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
  sensors: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.place = {id: '', name: '', description: ''};
  }

  ionViewDidLoad() {
    let place = this.navParams.get('place');

    if(typeof(place) !== 'undefined') {
      this.place = place;
    }

    this.sensors = this.dataProvider.getSensorsByPlaceId(this.place.id);
  }

  editSensor(sensor) {
    this.navCtrl.push('EditSensorPage', {
      sensor: sensor
    });
  }

  sensorInfo(sensor) {
    this.navCtrl.push('TemperaturesPage', {
      sensor: sensor,
      place: this.place
    });
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

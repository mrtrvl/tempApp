import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the TemperaturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temperatures',
  templateUrl: 'temperatures.html',
})
export class TemperaturesPage {

  temperatures: any;
  place: any;
  sensor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.place = {};
    this.sensor = {};
  }

  ionViewDidLoad() {
    let place = this.navParams.get('place');

    if(typeof(place) !== 'undefined') {
      this.place = place;
    }

    let sensor = this.navParams.get('sensor');

    if(typeof(sensor) !== 'undefined') {
      this.sensor = sensor;
    }

    this.temperatures = this.dataProvider.getTemperaturesFromSensorById(this.sensor.id);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the SensorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html',
})
export class SensorsPage {

  sensors: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {

  }

  ionViewDidLoad() {
    this.sensors = this.dataProvider.getAllSensors();
  }

  editSensor(sensor) {
    this.navCtrl.push('EditSensorPage', {
      sensor: sensor
    });
  }

  sensorInfo(sensor) {

    this.navCtrl.push('TemperaturesPage', {
      sensor: sensor
    });
  }
}

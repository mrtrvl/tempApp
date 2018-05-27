import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the EditSensorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-sensor',
  templateUrl: 'edit-sensor.html',
})
export class EditSensorPage {

  sensor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.sensor = {};
  }

  ionViewDidLoad() {
    let sensor = this.navParams.get('sensor');

    if(typeof(sensor) !== 'undefined') {
      this.sensor = sensor;
    }
  }

  save() {
    this.dataProvider.saveSensor(this.sensor);
    this.navCtrl.pop();
  }
}

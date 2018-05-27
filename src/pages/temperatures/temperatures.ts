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

  temperatures: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemperaturesPage');
    let sensor = this.navParams.get('sensor');
    this.temperatures = this.dataProvider.getTemperaturesFromSensorById(sensor.id);
  }

}

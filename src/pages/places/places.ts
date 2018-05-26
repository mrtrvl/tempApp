import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  //places: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
    this.dataProvider.load();
  }

  addPlace() {
    console.log('Add place');
    this.navCtrl.push('EditPlacePage');
  }

  editPlace(place) {
    console.log('Edit place');
    this.navCtrl.push('EditPlacePage', {
      place: place
    });
  }
}

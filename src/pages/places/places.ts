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

  places: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
    this.places = this.dataProvider.load();
  }

  addPlace() {
    this.navCtrl.push('EditPlacePage');
  }

  editPlace(place) {
    this.navCtrl.push('EditPlacePage', {
      place: place
    });
  }

  placeInfo(place) {
    this.navCtrl.push('PlaceInfoPage', {
      place: place
    });
  }
}

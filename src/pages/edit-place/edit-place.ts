import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the EditPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-place',
  templateUrl: 'edit-place.html',
})
export class EditPlacePage {

  place: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider, public alertCtrl: AlertController) {
    this.place = {id: '', name: '', description: ''};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPlacePage');
    let place = this.navParams.get('place');

    if(typeof(place) !== 'undefined') {
      this.place = place;
    }
  }

  save() {
    this.dataProvider.savePlace(this.place);
    this.navCtrl.pop();
  }

  removePlace() {
    this.dataProvider.removePlace(this.place);
    this.navCtrl.pop();
  }

  confirmRemove() {
    let confirm = this.alertCtrl.create({
      title: 'Kustutan asukoha?',
      message: 'Oled kustutamast asukohta! Jätkan?',
      buttons: [
        { text: 'Katkesta',
          handler: () => {
            // console.log('cancel clicked');
          }
        },
        { text: 'Kustuta',
          handler: () => {
            this.removePlace();
          }
        }
      ]
    });
    confirm.present(); }
}

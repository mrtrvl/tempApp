import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  places: any = [];

  constructor(public http: HttpClient, public storage: Storage) {
    //console.log('Hello DataProvider Provider');
  }

  load() {
    console.log('Loading data');
    
    return new Promise(resolve => {
      if (this.places.length > 0) {
        resolve(this.places);
      } else {
        this.storage.get('placeData').then((places) => {
          if (places && typeof(places) !== 'undefined') {
            this.places = places;
          }

          resolve(this.places);
        })
      }
    });
  }

  save(place) {
    let index = this.places.indexOf(place);

    if (index === -1) {
      this.places.push(place);
    } else {
      this.places[index] = place;
    }
    console.log('Saving data');
    this.storage.set('placeData', this.places);
  }

  removePlace(place) {
    let index = this.places.indexOf(place);

    if (index !== -1) {
      this.places.splice(index, 1);
    }

    this.storage.set('placeData', this.places);
  }
}

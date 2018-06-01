import { Injectable } from '@angular/core';
//import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

interface Place {
  id: string;
  name: string;
  description: string;
  createdDate: Date;
  deletedDate: Date;
  modifiedDate: Date;
  sensors: any;
 }

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  placesCollection: AngularFirestoreCollection<Place>;
  places: Observable<Place[]>

/*   sensorsCollection: AngularFirestoreCollection<any>;
  sensors: Observable<any[]>; */

   constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.auth.signInAnonymously();
    this.placesCollection = this.afs.collection('places', ref => ref.where('deletedDate', '==', null));
    this.places = this.placesCollection.valueChanges();
  }

  load() {
    return this.places;
  }

  async savePlace(place: Place) {
    if(place.id === ''){
      const newPlaceRef = this.placesCollection.add(place);
      place.id = await newPlaceRef.then(result => result.id);
      place.createdDate = new Date();
      place.modifiedDate = new Date();
      place.deletedDate = null;
    } else {
      place.modifiedDate = new Date();
    }
    this.placesCollection.doc(place.id).set(place, { merge: true })
    .then(() => {
        console.log("Document addded with id >>> ", place.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  }

  removePlace(place: Place) {
    place.deletedDate = new Date();
    this.placesCollection.doc(place.id).set(place, { merge: true })
    .then(() => {
        console.log("Document removed with id >>> ", place.id);
    })
    .catch((error) => {
        console.error("Error removing document: ", error);
    });
  }

/*   addSensor(sensor) {
    const newSensorRef = this.sensorsRef.push({});

    newSensorRef.set({
            id: newSensorRef.key,
            name: sensor.name,
            description: sensor.description,
            placeId: sensor.placeId
      });
  } */

  getSensorsByPlaceId(placeId) {
    const sensorsCollection = this.afs.collection('sensors', ref => ref.where('placeId', '==', placeId));
    const sensors = sensorsCollection.valueChanges();
    return sensors;
  }

  saveSensor(sensor) {
    const sensorsCollection = this.afs.collection('sensors');
    sensor.modifiedDate = new Date();
    sensorsCollection.doc(sensor.id).set(sensor, { merge: true })
      .then(() => {
          console.log("Document modified with id >>> ", sensor.id);
      })
      .catch((error) => {
          console.error("Error modifing document: ", error);
      });
  }

  getAllSensors() {
    const sensorsCollection = this.afs.collection('sensors', ref => ref.where('deletedDate', '==', null));
    const sensors = sensorsCollection.valueChanges();

    return sensors;
  }

  getTemperaturesBySensorId(sensorId) {
    const temperaturesCollection = this.afs.collection('sensors/' + sensorId + '/temperatures', ref => ref.orderBy('createdDate', 'desc'));
    const temperatures = temperaturesCollection.valueChanges();

    return temperatures;
  }

  getLastTemperatureOfSensorById(sensorId) {
    let temperature = 21;

    return temperature;
  }
}

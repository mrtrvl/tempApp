import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  placesRef: AngularFireList<any>;
  places: Observable<any[]>;

  sensorsRef: AngularFireList<any>;
  sensors: any;
  query: AngularFireList<any>;

  constructor(public afDatabase: AngularFireDatabase) {
    this.placesRef = afDatabase.list('/places');
    this.places = this.placesRef.valueChanges();

    this.sensorsRef = afDatabase.list('/sensors');
  }

  load() {
    return this.places;
  }

  savePlace(place) {
    if (place.id === '') {

      const newPlaceRef = this.placesRef.push({});

      newPlaceRef.set({
            id: newPlaceRef.key,
            name: place.name,
            description: place.description
      });
    } else {
        this.placesRef.update(place.id, place);
    }
  }

  removePlace(place) {
    this.placesRef.remove(place.id);
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

  getSensorsOfPlaceById(placeId) {
    let sensors = this.afDatabase.list('/sensors', ref => ref.orderByChild('placeId').equalTo(placeId)).valueChanges();
    return sensors;
  }

  saveSensor(sensor) {
    this.sensorsRef.update(sensor.id, sensor);
  }

  getAllSensors() {
    let sensors = this.afDatabase.list('/sensors').valueChanges();
    
    return sensors;
  }

  getTemperaturesFromSensorById(sensorId) {
    let temperatures = this.afDatabase.list('/temperatures', ref => ref.orderByChild('sensorId').equalTo(sensorId)).valueChanges();
    
    return temperatures;
  }

  getLastTemperatureOfSensorById(sensorId) {
    let temperature = 21;

    return temperature;
  }
}

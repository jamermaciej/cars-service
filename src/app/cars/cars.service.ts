// declare var require;
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Car } from './models/car';

// const ObjectID = require('bson-objectid');
// const ObjectId = require('./../../../node_modules/mongo').ObjectID;

// import { ObjectId } from './../../../node_modules/mongodb-core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private apiUrl = 'http://localhost:3000/api/cars';

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/cars-service/collections/cars';
  readonly params: HttpParams;

  oid: number;

  getParams(): HttpParams {
    // const uid = this.authService.user.uid;
    // const query = {'userId': uid};
    const id =  {
      '$oid': this.oid
    };
    const query = {'_id': id};
    return new HttpParams().set('apiKey', 'ejxsM6UOkEfaT_jGQSrYFryTD1Iw1ZiI')
    .append('q', JSON.stringify(query));
  }
  getParam(): HttpParams {
    return new HttpParams().set('apiKey', 'ejxsM6UOkEfaT_jGQSrYFryTD1Iw1ZiI');
  }

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.URL_DB, {params: this.getParam()});
  }
  getCar(id: number): Observable<Car> {
    // return this.httpClient.get<Car>(`${this.apiUrl}/${id}`);
    return this.httpClient.get<Car>(`${this.URL_DB}/${id}`, {params: this.getParam()});
  }
  addCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(this.URL_DB, car, {params: this.getParam()});
  }
  updateCar(id, car: Car): Observable<Car> {
    this.oid = id;
    // return this.httpClient.put<Car>(`${this.apiUrl}/${id}`, car, {params: this.getParams()});
    return this.httpClient.put<Car>(this.URL_DB, car, {params: this.getParams()});
  }
  deleteCar(id: number ): Observable<Car> {
    return this.httpClient.delete<Car>(`${this.URL_DB}/${id}`, {params: this.getParam()});
  }
}

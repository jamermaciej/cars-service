import { Car } from '../cars/models/car';
import { Injectable } from '@angular/core';
import { CarsService } from './cars.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable()
export class CarsListResolve implements Resolve<Car[]> {
    constructor(private carsService: CarsService) {

    }
    resolve(route: ActivatedRouteSnapshot ) {
        return this.carsService.getCars();
    }
}

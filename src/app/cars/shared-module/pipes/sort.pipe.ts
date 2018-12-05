import { Car } from './../../models/car';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(cars: Car[], column?: string, order?: number): Car[] {

    if ( !cars || !column || !order ) {
      return cars;
    }
    return cars.sort( (a: Car, b: Car) => {

      return a[column] > b[column] ? order : order * (-1);
    });
  }

}

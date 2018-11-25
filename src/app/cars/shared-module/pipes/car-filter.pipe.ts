import { Car } from './../../models/car';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(cars: Car[], queryText: string): Car[] {
    // tslint:disable-next-line:curly
    if ( !cars || !queryText ) return cars;

    return cars.filter( car => car.model.toLowerCase().indexOf(queryText.toLowerCase()) !== -1 );
  }

}

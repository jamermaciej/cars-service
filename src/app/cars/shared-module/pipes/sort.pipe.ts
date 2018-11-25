import { Car } from './../../models/car';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Car[], args?: any): Car[] {
    return value.sort( (a, b) => {
      if ( a.model > b.model ) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}

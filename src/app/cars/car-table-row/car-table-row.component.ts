import { Car } from './../models/car';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-car-table-row]',
  templateUrl: './car-table-row.component.html',
  styleUrls: ['./car-table-row.component.scss']
})
export class CarTableRowComponent implements OnInit {

  @Input()
  car: Car;
  @Output()
  deletedCar = new EventEmitter<number>();

  @Input()
  idx: number;

  constructor() { }

  ngOnInit() {
  }

  deleteCar(id, event) {
    event.stopPropagation();
    this.deletedCar.emit(id);
  }

}

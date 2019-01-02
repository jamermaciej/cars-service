import { Car } from './../models/car';
import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

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

  @HostBinding('class.after-deadline') deadline: boolean = false;

  @Input()
  idx: number;

  constructor() { }

  ngOnInit() {
    this.deadline = new Date(this.car.deadline) < new Date();
  }

  deleteCar(id, event) {
    event.stopPropagation();
    this.deletedCar.emit(id);
  }

}

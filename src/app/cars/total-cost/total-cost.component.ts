import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.scss']
})
export class TotalCostComponent implements OnInit {

  @Input()
  totalCost: number ;

  @Output()
  shownGross: EventEmitter<number> = new EventEmitter<number>(true);
  private VAT = 1.23;

  constructor() { }

  ngOnInit() {
  }

  showGross(): void {
    this.shownGross.emit(this.totalCost * this.VAT);
  }
}

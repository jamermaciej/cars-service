import { Subscription } from 'rxjs';
import { CostService } from './../../cost.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.scss']
})
export class IncomeTaxComponent implements OnInit, OnDestroy {

  private incomeTax: number = 18;
  income: number;

  costSubsription: Subscription;

  constructor(private costService: CostService) { }

  ngOnInit() {
    this.costSubsription = this.costService.totalCostSource$.subscribe( cost => {
      this.income = cost * this.incomeTax / 100;
      // this.income = Object.assign({}, cost);
    });
  }
  ngOnDestroy() {
    if ( this.costSubsription ) {
      this.costSubsription.unsubscribe();
    }
  }
}

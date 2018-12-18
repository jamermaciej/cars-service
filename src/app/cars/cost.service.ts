import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostService {

  // totalCostSource$ = new Subject<number>();

  totalCostSource$ = new BehaviorSubject<number>(null);

  // private totalCostSource = new Subject<number>();
  // totalCostSource$ = this.totalCostSource.asObservable();

  shareCost(cost: number ) {
    this.totalCostSource$.next(cost);
  }
}

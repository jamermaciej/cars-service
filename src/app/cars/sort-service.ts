import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  private solumnSortedSource = new Subject<ColumnSortedEvent>();

  columnSorted$ = this.solumnSortedSource.asObservable();

  columnSorted(event: ColumnSortedEvent) {
    this.solumnSortedSource.next(event);
  }
}

export interface ColumnSortedEvent {
  sortColumn: string;
  sortDirection: string;
}

import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  private columnSortedSource = new Subject<ColumnSortedEvent>();

  columnSorted$ = this.columnSortedSource.asObservable();

  columnSorted(event: ColumnSortedEvent) {
      this.columnSortedSource.next(event);
  }
}

export interface ColumnSortedEvent {
  sortColumn: string;
  sortDirection: string;
}

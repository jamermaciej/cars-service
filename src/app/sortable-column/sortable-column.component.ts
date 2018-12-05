import { SortService } from './../cars/sort-service';
import { Component, OnInit, HostListener, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: '[app-sortable-column]',
  templateUrl: './sortable-column.component.html',
  styleUrls: ['./sortable-column.component.scss']
})
export class SortableColumnComponent implements OnInit, OnDestroy {

  constructor(private sortService: SortService) { }

  @Input('sort-direction')
  sortDirection: string = '';

  @Input('app-sortable-column')
  columnName: string;

  private columnSortedSubscription: Subscription;

  @HostListener('click')
  sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    console.log(this.columnName);
    this.sortService.columnSorted({
      sortColumn: this.columnName,
      sortDirection: this.sortDirection
    });
  }

  ngOnInit() {
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe( event => {
      if ( this.columnName !== event.sortColumn ) {
        this.sortDirection = '';
      }
    });
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }
}

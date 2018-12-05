import { Subscription } from 'rxjs';
import { SortService, ColumnSortedEvent } from './sort-service';
import { Directive, Output, OnDestroy, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  selector: '[appSortableTable]'
})
export class SortableTableDirective implements OnInit, OnDestroy {

  constructor(private sortService: SortService) { }

  @Output()
  sorted = new EventEmitter();

  private columnSortedSubstription: Subscription;

  ngOnInit() {
    this.columnSortedSubstription = this.sortService.columnSorted$.subscribe( event => {
      this.sorted.emit(event);
    });
  }

  ngOnDestroy() {
    this.columnSortedSubstription.unsubscribe();
  }
}

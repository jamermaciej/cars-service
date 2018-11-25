import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';

declare const M;

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit, AfterViewInit {

  queryText: string;

  selectedBy = [
    {
      name: 'Model',
      value: 'model'
    },
    {
      name: 'Plate',
      value: 'plate'
    },
    {
      name: 'Delivery date',
      value: 'delivery-date'
    },
    {
      name: 'Deadline',
      value: 'deadline'
    },
    {
      name: 'Client firstname',
      value: 'clientFirstName'
    },
    {
      name: 'Client surname',
      value: 'clientSurname'
    }
  ];

  searchBy = 'model';

  @Output()
  searchByE: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  filter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems);
  }

  filterE() {
    this.filter.emit(this.queryText);
  }

  emitSearchBy() {
    // this.queryText = ''; // kasowanie tekstu w widoku
    this.searchByE.emit(this.searchBy);
  }
}

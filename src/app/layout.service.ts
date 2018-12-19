import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  sidebarSource$ = new BehaviorSubject<boolean>(false);

  showSidebar() {
    this.sidebarSource$.next(true);
  }

  hideSidebar() {
    this.sidebarSource$.next(false);
  }

}

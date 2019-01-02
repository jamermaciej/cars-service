import { LayoutService } from './layout.service';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showSpinner = true;
  isSidebarVisible: boolean = false;

  constructor(private router: Router,
              private layoutService: LayoutService) {
    this.router.events.subscribe( (routerEvent: Event) => {
      if ( routerEvent instanceof NavigationStart ) {
        this.showSpinner = true;
      }
      if ( routerEvent instanceof NavigationEnd ) {
        this.showSpinner = false;
      }
    });
  }


ngOnInit() {
  this.layoutService.sidebarSource$.subscribe( isVisible => {
    this.isSidebarVisible = isVisible;
    console.log(isVisible);
  });
}

}

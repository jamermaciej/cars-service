import { take, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { Router, CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FormCanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor(private authService: AuthService,
    private router: Router,
    private angularFire: AngularFireAuth) {}

    canDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true ;
  }
}

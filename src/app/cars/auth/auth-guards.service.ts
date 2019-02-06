import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import {take, map, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService,
              private router: Router,
              private angularFire: AngularFireAuth) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      // if ( this.authService.user ) {
      //   return true;
      // } else {
      //   // this.authService.redirectUrl = state.url;
      //   this.router.navigate(['/login']);
      //   return false;
      // }
      console.log(this.authService.user);
      console.log(this.angularFire.authState);
      return this.angularFire.authState.pipe(
        take(1),
        map(user => !!user),
        tap(
          loggedIn => {
            if (!loggedIn) {
              this.router.navigate(['/login']);
            }
          }
        )
      );
   }
   canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }
 }

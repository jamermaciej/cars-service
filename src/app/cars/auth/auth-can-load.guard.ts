import { take, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCanLoadGuard implements CanLoad {

  constructor(private authService: AuthService,
    private router: Router,
    private angularFire: AngularFireAuth) {}

  canLoad(
    route: Route): Observable<boolean> | Promise<boolean> | boolean {
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
}

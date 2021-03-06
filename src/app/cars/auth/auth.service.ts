import { LayoutService } from './../../layout.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // redirectUrl: string;

  user: User;
  message: string;

  minutes_until_auto_logout = 5;
  check_interval = 1000;
  store_key = 'lastaction';
  cutdown;
  time_to_logout;

  constructor(private angularFire: AngularFireAuth,
              private router: Router,
              private layoutService: LayoutService) {
      angularFire.authState.subscribe( user => {
        this.user = user;
        console.log(new Date());

        // if ( this.user && this.redirectUrl ) {
        //   this.router.navigate([this.redirectUrl]);
        // }

        this.initInterval();
        this.check();
        this.initListener();
      });
  }

  signup(email, password) {
    this.angularFire.auth.createUserWithEmailAndPassword(email, password)
    .then( user => {
      console.log(user);

      this.angularFire.auth.currentUser.sendEmailVerification()
      .then( () => {
          console.log('ver');
      })
      .catch( () => {
          console.log('nover');
      });
    })
    .catch( error => {
      this.message = error.message;
    });
  }
  login(email, password) {
    this.angularFire.auth.signInWithEmailAndPassword(email, password)
        .then( user => {
          console.log(user);
          // this.layoutService.showSidebar();
          this.router.navigate(['/cars']);
          // this.router.navigate(['/cars']).then( () => this.layoutService.showSidebar()); przeniesione do login.component.ts
        })
        .catch( error => {
          console.log(error);
          this.message = error.message;
        });
   }
   logout() {
     this.angularFire.auth.signOut();
     this.layoutService.hideSidebar();
     this.router.navigate(['/login']);
     localStorage.setItem('isSidebarVisible', 'false');
   }
   sendEmailVerLink() {
    this.angularFire.auth.currentUser.sendEmailVerification()
      .then( success => {
        console.log(success);
      })
      .catch(error => {
        console.log(error);
      });
   }
   resetPassword(email) {
    this.angularFire.auth.sendPasswordResetEmail(email)
      .then( success => {
        console.log(success);
      })
      .catch( error => {
        console.log(error);
      });
   }

   get lastAction() {
     return parseInt(localStorage.getItem(this.store_key));
   }
   set lastAction(value) {
    localStorage.setItem(this.store_key, '' + value);
   }
   initListener() {
     document.body.addEventListener('click', () => this.reset());
   }
   reset() {
     this.lastAction = Date.now();
   }

   initInterval() {
    this.cutdown =  setInterval( () => {
      this.check();
     }, this.check_interval);
   }
   check() {
    const now = Date.now();
    const timeleft = this.lastAction + this.minutes_until_auto_logout * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;
    this.time_to_logout = Math.ceil((timeleft - now) / 60000);

    if ( isTimeout ) {
      this.logout();
      clearInterval(this.cutdown);
    }
   }
}

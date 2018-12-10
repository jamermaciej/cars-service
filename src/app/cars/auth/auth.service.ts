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

  constructor(private angularFire: AngularFireAuth,
              private router: Router) {
      angularFire.authState.subscribe( user => {
        this.user = user;

        // if ( this.user && this.redirectUrl ) {
        //   this.router.navigate([this.redirectUrl]);
        // }
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
          this.router.navigate(['/user-account']);
        })
        .catch( error => {
          console.log(error);
          this.message = error.message;
        });
   }
   logout() {
     this.angularFire.auth.signOut();
     this.router.navigate(['/login']);
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
}

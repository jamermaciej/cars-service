import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  // lastLogin;
  // timeNow;

  constructor(public authService: AuthService) {
    // this.lastLogin = new Date(this.authService.user.metadata.lastSignInTime);
    // this.lastLogin = this.lastLogin.getTime();
  }

  ngOnInit() {
    // const cutDown = setInterval( () => {
    //   this.timeNow = new Date().getTime();
    //   console.log((this.timeNow - this.lastLogin) / 1000);
    //   if ( (this.timeNow - this.lastLogin) / 1000  > 60 ) {
    //     this.authService.logout();
    //     clearInterval(cutDown);
    //   }
    // }, 1000);
  }
  sendEmailVerLink() {
    this.authService.sendEmailVerLink();
  }
}

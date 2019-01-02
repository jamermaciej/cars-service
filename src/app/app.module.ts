import { UserAccountComponent } from './cars/user-account/user-account.component';
import { FormCanDeactivateGuard } from './cars/auth/form-can-deactivate.guard';
import { AuthCanLoadGuard } from './cars/auth/auth-can-load.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { AuthGuardsService } from './cars/auth/auth-guards.service';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from './cars/auth/auth.service';
import { CarsModule } from './cars/cars.module';
import { CoreModule } from './cars/core-module/core-module/core-module';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './cars/cars.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CarsRoutingModule } from './cars/cars.routing.module';
import { config } from './../environments/environment';
import { LayoutService } from './layout.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './cars/shared-module/shared-module/shared-module';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    PageNotFoundComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // CarsModule,
    CoreModule,
    LoginModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    CarsService,
    AuthService,
    AuthGuardsService,
    LayoutService,
    AuthCanLoadGuard,
    FormCanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

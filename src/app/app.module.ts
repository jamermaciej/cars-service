import { SortableTableDirective } from './cars/sortable-table.directive';
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
import { SortService } from './cars/sort-service';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    SortableTableDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarsModule,
    CoreModule,
    AppRoutingModule,
    CarsRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [CarsService, AuthService, AuthGuardsService, SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }

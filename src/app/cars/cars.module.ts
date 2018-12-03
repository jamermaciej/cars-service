import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UserAccountComponent } from './user-account/user-account.component';
import { LoadingSpinnerComponent } from './../loading-spinner/loading-spinner.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarResolve } from './car-resolve.service';
import { RouterModule } from '@angular/router';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { SharedModule } from './shared-module/shared-module/shared-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { AddCarComponent } from './add-car/add-car.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { CarsListResolve } from './cars-list-resolve.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [
    CarsListComponent
  ],
  providers: [
    CarResolve,
    CarsListResolve
  ],
  declarations: [
    CarsListComponent,
    TotalCostComponent,
    CarsDetailsComponent,
    AddCarComponent,
    SearchCarComponent,
    LoginComponent,
    UserAccountComponent
  ]
})
export class CarsModule { }
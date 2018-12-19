import { CarsRoutingModule } from './cars.routing.module';
import { CarsComponent } from './cars.component';
import { CarTableRowComponent } from './car-table-row/car-table-row.component';
import { CostService } from './cost.service';
import { IncomeTaxComponent } from './total-cost/income-tax/income-tax.component';
import { MaterialModule } from './../material/material.module';
import { DatepickerComponent } from './../datepicker/datepicker.component';
import { SortService } from './../sort/sort.service';
import { SortableTableDirective } from './../sort/sortable-table.directive';
import { SortableColumnComponent } from './../sort/sortable-column/sortable-column.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UserAccountComponent } from './user-account/user-account.component';
import { LoadingSpinnerComponent } from './../loading-spinner/loading-spinner.component';
import { LoginComponent } from '../login/login.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    // BrowserAnimationsModule, przeniesione do app.module.ts
    // NgbModule
    // MaterialModule
    CarsRoutingModule
  ],
  exports: [
    CarsListComponent
  ],
  providers: [
    CarResolve,
    CarsListResolve,
    SortService,
    CostService
  ],
  declarations: [
    CarsComponent,
    CarsListComponent,
    TotalCostComponent,
    CarsDetailsComponent,
    AddCarComponent,
    SearchCarComponent,
    // LoginComponent,
    UserAccountComponent,
    SortableColumnComponent,
    SortableTableDirective,
    DatepickerComponent,
    IncomeTaxComponent,
    CarTableRowComponent
  ]
})
export class CarsModule { }

import { FormCanDeactivateGuard } from './auth/form-can-deactivate.guard';
import { CarsListResolve } from './cars-list-resolve.service';
import { UserAccountComponent } from './user-account/user-account.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarsComponent } from './cars.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthGuardsService } from './auth/auth-guards.service';
import { CarResolve } from './car-resolve.service';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const carsRoutes: Routes = [
    {
        path: 'add-car',
        component: AddCarComponent,
        // canActivate: [AuthGuardsService]
        canDeactivate: [FormCanDeactivateGuard]
    },
    {
        path: '',
        component: CarsComponent,
        children: [
            {
                path: '',
                component: CarsListComponent,
                resolve: { cars : CarsListResolve } // przeniesione z app.routing.module.ts
            },
            {
                path: ':id',
                component: CarsDetailsComponent,
                canDeactivate: [FormCanDeactivateGuard],
                // canActivate: [AuthGuardsService],
                resolve: { car: CarResolve }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(carsRoutes)],
    exports: [RouterModule]
  })

export class CarsRoutingModule {}

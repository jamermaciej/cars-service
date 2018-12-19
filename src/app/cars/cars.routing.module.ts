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
                // canActivate: [AuthGuardsService],
                resolve: { car: CarResolve }
            },
            {
                path: 'add-car',
                component: AddCarComponent,
                canActivate: [AuthGuardsService]
            },
            {
                path: 'user-account',
                component: UserAccountComponent,
                canActivate: [AuthGuardsService]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(carsRoutes)],
    exports: [RouterModule]
  })

export class CarsRoutingModule {}

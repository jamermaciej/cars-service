import { CanActivate } from '@angular/router/src/interfaces';
import { AuthGuardsService } from './auth/auth-guards.service';
import { CarResolve } from './car-resolve.service';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const carsRoutes: Routes = [
    {
        path: 'cars/:id',
        component: CarsDetailsComponent,
        canActivate: [AuthGuardsService],
        resolve: { car: CarResolve }
    }
];

@NgModule({
    imports: [RouterModule.forChild(carsRoutes)],
    exports: [RouterModule]
  })

export class CarsRoutingModule {}

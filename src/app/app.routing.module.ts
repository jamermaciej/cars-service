import { AuthGuardsService } from './cars/auth/auth-guards.service';
import { UserAccountComponent } from './cars/user-account/user-account.component';
import { CarsListResolve } from './cars/cars-list-resolve.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { LoginComponent } from './cars/auth/login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'cars',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cars',
        component: CarsListComponent,
        resolve: { cars : CarsListResolve },
        canActivate: [AuthGuardsService]
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
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
    exports: [RouterModule]
  })

export class AppRoutingModule {}

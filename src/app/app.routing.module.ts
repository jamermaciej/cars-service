import { AuthCanLoadGuard } from './cars/auth/auth-can-load.guard';
import { AuthGuardsService } from './cars/auth/auth-guards.service';
import { UserAccountComponent } from './cars/user-account/user-account.component';
import { CarsListResolve } from './cars/cars-list-resolve.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'cars',
        // component: CarsListComponent,
        // resolve: { cars : CarsListResolve },
        // canActivate: [AuthGuardsService],
        canLoad: [AuthCanLoadGuard],
        loadChildren: './cars/cars.module#CarsModule',
    },
    {
        path: 'user-account',
        component: UserAccountComponent,
        canActivate: [AuthGuardsService]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {enableTracing: false})],
    exports: [RouterModule]
  })

export class AppRoutingModule {}

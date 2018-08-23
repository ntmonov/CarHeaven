import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { CarsModule } from './components/cars/cars.module';
import { NotFoundPageComponent } from './components/shared/not-found-page/not-found-page.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'cars', canActivate: [ AuthGuard ], loadChildren: '../app/components/cars/cars.module#CarsModule'},
  { path: 'search', canActivate: [AuthGuard], loadChildren: '../app/components/search/search.module#SearchModule' },
  { path: '**', component: NotFoundPageComponent }
]
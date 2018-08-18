import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { CarsModule } from './components/cars/cars.module';

export const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'cars', loadChildren: '../app/components/cars/cars.module#CarsModule'}
]
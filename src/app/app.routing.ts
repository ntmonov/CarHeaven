import { Route } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { NotFoundPageComponent } from './components/shared/not-found-page/not-found-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminModule } from '../app/components/admin/admin.module'
import { BlockedComponent } from './components/shared/blocked/blocked.component';
import { BlockedGuard } from './core/guards/blocked.guard';
import { AdminGuard } from './core/guards/admin.guard';

export const routes : Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'blocked', component: BlockedComponent },
  { path: 'cars', canActivate: [ AuthGuard, BlockedGuard ], loadChildren: '../app/components/cars/cars.module#CarsModule'},
  { path: 'search', canActivate: [AuthGuard, BlockedGuard], loadChildren: '../app/components/search/search.module#SearchModule' },
  { path: 'admin', canActivate: [AuthGuard, AdminGuard], loadChildren: '../app/components/admin/admin.module#AdminModule' },
  { path: 'profile', canActivate: [ AuthGuard ], loadChildren: '../app/components/profile/profile.module#ProfileModule' }, 
  { path: '**', component: NotFoundPageComponent }
]
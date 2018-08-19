import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { routes } from './app.routing'
import { ToastrModule } from 'ngx-toastr'
 
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { AuthModule } from './components/auth/auth.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

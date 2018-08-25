import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { routes } from './app.routing'
import { ToastrModule } from 'ngx-toastr'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
  
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { AuthModule } from './components/auth/auth.module';
import { RouterModule } from '@angular/router';
import { GuardsModule } from './core/guards/guards.module';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { AdminModule } from '../app/components/admin/admin.module';
import { CommentModule } from './components/comment/comment.module';

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
    ToastrModule.forRoot(),
    GuardsModule,
    CommentModule
      ],
//   providers: [{
//     provide: HTTP_INTERCEPTORS,
//     useClass: TokenInterceptor,
//     multi: true
//  }
// ],
  bootstrap: [AppComponent]
})
export class AppModule { }

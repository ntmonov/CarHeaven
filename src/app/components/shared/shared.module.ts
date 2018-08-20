import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, NotFoundPageComponent],
  imports: [ CommonModule, RouterModule ],
  exports: [ NavbarComponent, FooterComponent ]
})
export class SharedModule {}
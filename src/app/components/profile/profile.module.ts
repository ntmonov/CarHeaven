import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { profileRoutes } from './profile.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(profileRoutes)
  ],
  declarations: [ProfilePageComponent]
})
export class ProfileModule { }

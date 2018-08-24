import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { BlockedGuard } from './blocked.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ AuthGuard, BlockedGuard ]
})
export class GuardsModule { }

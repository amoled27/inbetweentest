import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
const homeRoutes: Routes = [
  {
    path: '',
    component: UserDetailsComponent
  }
];
@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(homeRoutes),
  ],
  declarations: [UserDetailsComponent]
})
export class UserDetailsModule { }

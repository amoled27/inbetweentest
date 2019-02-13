import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const homeRoutes: Routes  = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(homeRoutes),
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

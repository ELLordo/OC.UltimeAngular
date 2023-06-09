import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexFormRoutingModule } from './complex-form-routing.module';
import { ComplexformComponent } from './complexform/complexform.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ComplexformComponent
  ],
  imports: [
    CommonModule,
    ComplexFormRoutingModule,
    SharedModule
  ]
})
export class ComplexFormModule { }

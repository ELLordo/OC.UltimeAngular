import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexFormRoutingModule } from './complex-form-routing.module';
import { ComplexformComponent } from './complexform/complexform.component';
import { SharedModule } from '../shared/shared.module';
import { ComplexFormService } from './services/complex-form.service';


@NgModule({
  declarations: [
    ComplexformComponent
  ],
  imports: [
    CommonModule,
    ComplexFormRoutingModule,
    SharedModule
  ],
  providers: [
    ComplexFormService
  ]
})
export class ComplexFormModule { }

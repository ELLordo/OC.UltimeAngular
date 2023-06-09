import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexformComponent } from './complexform/complexform.component';

const routes: Routes = [
  {path:'', component: ComplexformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplexFormRoutingModule { }

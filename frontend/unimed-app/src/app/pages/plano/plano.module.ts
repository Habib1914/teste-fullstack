import { PlanoRoutingModule } from './plano-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { PlanosFormComponent } from './planos-form/planos-form.component';
import { PlanosListaComponent } from './planos-lista/planos-lista.component';
@NgModule({
  declarations: [PlanosFormComponent, 
    PlanosListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PlanoRoutingModule
  ],
  exports: [
    PlanosFormComponent, 
    PlanosListaComponent  ]
})
export class PlanoModule { }
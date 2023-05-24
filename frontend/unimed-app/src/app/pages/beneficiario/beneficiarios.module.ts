import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiariosFormComponent } from './beneficiarios-form/beneficiarios-form.component';
import { FormsModule} from '@angular/forms';
import { BeneficiariosListaComponent } from './beneficiarios-lista/beneficiarios-lista.component';
import { BeneficiariosRoutingModule } from './beneficiarios-routing.module';



@NgModule({
  declarations: [BeneficiariosFormComponent, BeneficiariosListaComponent],
  imports: [
    CommonModule,
    BeneficiariosRoutingModule,
    FormsModule
  ],
  exports: [BeneficiariosFormComponent, BeneficiariosListaComponent]
})
export class BeneficiarioModule { }
import { LayoutComponent } from '../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { PlanosFormComponent } from './planos-form/planos-form.component';
import { PlanosListaComponent } from './planos-lista/planos-lista.component';

const routes: Routes = [
  { path:   'planos', component: LayoutComponent,  canActivate : [AuthGuard], children: [
    { path: 'form', component: PlanosFormComponent},
    { path: 'form/:id', component: PlanosFormComponent},
    { path:  'lista', component: PlanosListaComponent },
    { path: '', redirectTo: '/planos/lista', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanoRoutingModule { }
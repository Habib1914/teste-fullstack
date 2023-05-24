import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { Observable } from 'rxjs';
import { Plano } from 'src/app/models/plano';
import { PlanoService } from 'src/app/services/plano.service';

@Component({
  selector: 'app-planos-form',
  templateUrl: './planos-form.component.html',
  styleUrls: ['./planos-form.component.css']
})
export class PlanosFormComponent implements OnInit {

  plano: Plano;
  success: boolean = false;
  errors!: String[];
  id!: number;

  constructor( 
      private service: PlanoService ,
      private router: Router,
      private activatedRoute : ActivatedRoute
      ) {
    this.plano = new Plano();
    this.errors = [];
  }

  ngOnInit(): void {
   console.log("planos-form-conponent on init")
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service
            .getPlanoById(this.id)
            .subscribe( 
              response => this.plano = response ,
              errorResponse => this.plano = new Plano()
            )
        }
    })
  }

  voltarParaListagem(){
    this.router.navigate(['/planos/lista'])
  }

  onSubmit(){
    if(this.id){

      this.service
        .updatePlano(this.plano)
        .subscribe(response => {
            this.success = true;
            this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o plano.']
        })


    }else{

      this.service
        .salvar(this.plano)
          .subscribe( response => {
            this.success = true;
            this.errors = [];
            this.plano = response;
          } , errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          })

    }

  }

}

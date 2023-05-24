import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { Observable } from 'rxjs';
import { Beneficiario } from 'src/app/models/beneficiario';
import { Plano } from 'src/app/models/plano';
import { BeneficiariosService } from 'src/app/services/beneficiario.service';
import { PlanoService } from 'src/app/services/plano.service';

@Component({
  selector: 'app-beneficiarios-form',
  templateUrl: './beneficiarios-form.component.html',
  styleUrls: ['./beneficiarios-form.component.css']
})
export class BeneficiariosFormComponent implements OnInit {

  beneficiario: Beneficiario;
  planos: Plano[];
  success: boolean = false;
  errors!: String[];
  id!: number;

  constructor( 
      private service: BeneficiariosService ,
      private planoService: PlanoService,
      private router: Router,
      private activatedRoute : ActivatedRoute
      ) {
    this.beneficiario = new Beneficiario();
    this.errors = [];
    this.planos = [];
    this.getPlanos();
  }

  ngOnInit(): void {
   console.log("beneficiarios-form-conponent on init")
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
        this.id = urlParams['id'];
        if(this.id){
          this.service
            .getBeneficiarioById(this.id)
            .subscribe( 
              response => this.beneficiario = response ,
              errorResponse => this.beneficiario = new Beneficiario()
            )
        }
    })
  }
  
  getPlanos(): void {
    this.planoService.buscar().subscribe(
      planos => {
        this.planos = planos;
      },
      error => {
        console.log(error);
      }
    );
  }
  voltarParaListagem(){
    this.router.navigate(['/beneficiarios/lista'])
  }

  onSubmit(){
    if(this.id){

      this.service
        .updateBeneficiario(this.beneficiario)
        .subscribe(response => {
            this.success = true;
            this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o beneficiario.']
        })


    }else{
      this.service
        .salvar(this.beneficiario)
          .subscribe( response => {
            this.success = true;
            this.errors = [];
            this.beneficiario = response;
          } , errorResponse => {
            this.success = false;
            console.log(errorResponse)
            this.errors = errorResponse.error.errors;
          })

    }

  }

}

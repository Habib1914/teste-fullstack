import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Beneficiario } from 'src/app/models/beneficiario';
import { BeneficiariosService } from 'src/app/services/beneficiario.service';

@Component({
  selector: 'app-beneficiarios-lista',
  templateUrl: './beneficiarios-lista.component.html',
  styleUrls: ['./beneficiarios-lista.component.css']
})
export class BeneficiariosListaComponent implements OnInit {

  beneficiarios: Beneficiario[] = [];
  beneficiarioSelecionado!: Beneficiario;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(
    private service: BeneficiariosService, 
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getProductPage()
      .subscribe( resposta => this.beneficiarios = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/beneficiarios/form'])
  }


  deletarBeneficiario(beneficiario: Beneficiario){
    this.service
      .deleteBeneficiario(beneficiario)
      .subscribe( 
        response => {
          this.mensagemSucesso = 'Beneficiario deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o beneficiario.'  
      )
  }
}

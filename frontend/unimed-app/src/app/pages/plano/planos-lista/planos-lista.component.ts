import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Plano } from 'src/app/models/plano';
import { PlanoService } from 'src/app/services/plano.service';


@Component({
  selector: 'app-planos-lista',
  templateUrl: './planos-lista.component.html',
  styleUrls: ['./planos-lista.component.css']
})
export class PlanosListaComponent implements OnInit {

  planos: Plano[] = [];
  planoSelecionado!: Plano;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(
    private service: PlanoService, 
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .buscar()
      .subscribe( resposta => this.planos = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/planos/form'])
  }


  deletarPlano(plano: Plano){
    this.service
      .deletePlano(plano)
      .subscribe( 
        response => {
          this.mensagemSucesso = 'Plano deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o plano.'  
      )
  }
}

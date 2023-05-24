import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  cadastrando: boolean = false;
  mensagemSucesso!: string;
  usuario!: Usuario;
  errors: String[] = [];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { 
    this.usuario = new Usuario();
  }

  onSubmit(){
    this.authService
          .logar(this.usuario)
          .subscribe(response => {
            const access_token = JSON.stringify(response);
            localStorage.setItem('access_token', access_token)
            this.router.navigate(['/home'])
          }, errorResponse => {
            this.errors = ['Usuário e/ou senha incorreto(s).']
          })

  }

  preparaCadastrar(event: Event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  // cadastrar(){
   
  //   this.authService
  //       .salvar(this.usuario)
  //       .subscribe( response => {
  //           this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login.";
  //           this.cadastrando = false;
  //           this.username = '';
  //           this.password = '';
  //           this.errors = []
  //       }, errorResponse => {
  //           this.mensagemSucesso = "";
  //           this.errors = errorResponse.error.errors;
  //       })
  // }

}

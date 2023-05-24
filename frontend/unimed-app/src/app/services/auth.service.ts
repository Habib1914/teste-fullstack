import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { JwtHelperService } from '@auth0/angular-jwt'  


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'http://localhost:8080';
    private acess_token = 'access_token'
    jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(private httpClient: HttpClient,
        private router: Router) { }

    logar(usuario: Usuario): Observable<any> {
        console.log("logar")
        return this.httpClient.post<any>(this.apiUrl + "/login", usuario).pipe(
            tap((resposta) => {
                
                console.log(resposta['token'])

                localStorage.setItem(this.acess_token, JSON.stringify(resposta))
                this.router.navigate(['home'])
            }));
    }

    deslogar() {
        console.log("deslogar")
        localStorage.clear();
        this.router.navigate(['login']);
    }

    get obterTokenUsuario(): string | null {
        console.log("Obter Token")
        const tokenEncoded = localStorage.getItem(this.acess_token);
        console.log(tokenEncoded)
        return tokenEncoded;
    }

    get isLogado(): boolean {
        console.log("logado ?")
        console.log(localStorage.getItem(this.acess_token))
        return localStorage.getItem(this.acess_token) ? true : false;
    }
}

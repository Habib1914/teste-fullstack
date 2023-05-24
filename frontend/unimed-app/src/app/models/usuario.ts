export class Usuario {
    id?: number;
    nome?: string;
    login?: string;
    senha?: string;

    constructor( login?: string, senha?: string, id?: number, nome?: string) {
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.senha = senha;
      }
    
}

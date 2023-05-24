import { Plano } from "./plano";

export class Beneficiario {
    id!: number;
    nome!: string;
    cpf!: string;
    email!: string;
    idade!: string;
    plano!: Plano;
}
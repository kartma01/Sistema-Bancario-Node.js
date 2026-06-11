import { Cliente } from "../models/modeloCliente"

export const CriacaoDeConta =  (id:number ,nome: string, login: string, senha: string): Cliente => {
    return{
    id,
    login,
    senha,
    nome,
    saldo: 0,
    extrato: []
    }
}

export const adicionarConta = (localDasContas: Cliente[], informacoes: Cliente): void => {
    
    localDasContas.push(informacoes);
};


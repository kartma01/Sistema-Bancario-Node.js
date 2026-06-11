import rl from "./rl";
import * as conta from "./conta";
import { Cliente } from "../models/modeloCliente";


let proximoId = 1;

function FormacaoConta(contasCriadas: Cliente[],menuPrincipal: { (contasCriadas: Cliente[]): void; (arg0: Cliente[]): void; }) {

    rl.question("Nome: ", (nome) => {
        rl.question("Login: ", (login) => {
            // VERIFICANDO SER POSSUI CONTA COM O MESMO LOGIn
            let loginEncontrado = contasCriadas.find(
                conta => conta.login === login)

                //SE EXISTE VIA ENTR ANO IF E VAI RETORNA AS PERGUNTAS
                if (loginEncontrado){
                    console.log("LOGIN INVALIDO, POR FAVOR TENTE OUTRO!")
                    return FormacaoConta(contasCriadas,menuPrincipal)
                }
             
            //SE NÃO EXISTE VAI CONTINUA O CODIGO E PEDIR A SENHA
            rl.question("Senha: ", (senha) => {
            const adicionar = conta.CriacaoDeConta(
                proximoId++,
                nome,
                login,
                senha
            );

            //ADICIONANDO A CONTA NO CONTAS CRIADAS
            conta.adicionarConta(contasCriadas,adicionar);

            //RETORNANDO PARA O MENU PRINCIPAL COM A CONTA CRIADA
            return menuPrincipal(contasCriadas)

            });
        });

    });
}

export default FormacaoConta
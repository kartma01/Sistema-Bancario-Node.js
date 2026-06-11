import { Cliente } from "../models/modeloCliente";
import rl from "./rl";
import sacar from "./sacar";

function menuConta(contaLogada : Cliente ,contasCriadas: Cliente[] ,volta: (contasCriadas: Cliente[]) => void){
    console.log(`Bem vindo ${contaLogada.nome} \n seu saldo é de R$${contaLogada.saldo}`)
    console.log("==================================== // ===============================")
    rl.question(" 1 - Ver saldo.\n 2 - Depositar\n 3 - Sacar\n 4 - Ver extrato\n 5 - Sair\n OPÇÃO ESCOLHIDA: ", (escolha) => {
        
        //ESCOLHA ERRADA
        if (escolha != "1" && escolha != "2" && escolha != "3" && escolha != "4" && escolha != "5") {
                    console.log("OPÇÃO INVALIDA");
                    return menuConta(contaLogada,contasCriadas,volta);
                }
        
        //ESCOLHA PARA VER O SALDO
        if (escolha === "1"){
           console.log(contaLogada.saldo)
           return menuConta(contaLogada,contasCriadas,volta);
        }

        //ESCOLHA PARA FAZER O DEPOSITO
        if (escolha === "2"){
           rl.question(" Quanto deseja depositar? ", (DEPOSITO) => {
            //TRANSFORMANDO O DEPOSITO EM NUMBER POS ELE VEM COMO STRING
            const valorDeposito = Number(DEPOSITO)

            //VERIFICANDO SER A ENTRADA NO SAQUE FOI LETRA
            if (isNaN(valorDeposito)){
                console.log("VOCÊ ESTA TENTANDO DEPOSITA UM VALOR INVALIDO (LETRAS). POR FAVOR DIGITE APENAS NUMEROS")
                return menuConta(contaLogada,contasCriadas,volta)
            }

            //VALIDAÇÃO PARA VER SER O NUMERO É MENOR QUE 0
            if (valorDeposito <= 0){
                console.log("VALOR INVALIDO")
                return menuConta(contaLogada,contasCriadas,volta)
            }
            else{
                contaLogada.saldo += valorDeposito
                contaLogada.extrato.push(`Foi realizado um Deposito de R$${valorDeposito} na conta \n TOTAL NA CONTA: ${contaLogada.saldo}`)
          
            return menuConta(contaLogada, contasCriadas, volta)}
            
            })
        }

        //SAQUE
        if (escolha === "3"){
            sacar(contaLogada,contasCriadas,menuConta,volta)
        }

        //VER EXTRATO
        if (escolha === "4"){
            console.log(contaLogada.extrato)
            return menuConta(contaLogada, contasCriadas, volta)
        }

        //VOLTA PARA O MENU PRINCIPAL CRIAÇÃO E LOGIN DE CONTA
        if (escolha === "5"){
            return volta(contasCriadas)
        }

     console.log("==================================== // ===============================")           
    } );
    
}


export default menuConta
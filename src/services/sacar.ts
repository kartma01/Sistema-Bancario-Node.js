import menuConta from "./menuConta.js";
import rl from "../services/rl";
import { Cliente } from "../models/modeloCliente.js";

function sacar(contaLogada: Cliente, contasCriadas: Cliente[], menuConta: (contaLogada: Cliente, contasCriadas: Cliente[], volta: (contasCriadas: Cliente[]) => void) => void, volta: (contasCriadas: Cliente[]) => void  ){
    console.log(`Atualmente voce tem ${contaLogada.saldo}`)
    rl.question("Quanto de dinheiro deseja sacar? ", (saque) => {

        const valorSaque = Number(saque)

        //VERIFICANDO SER A ENTRADA NO SAQUE FOI LETRA
        if (isNaN(valorSaque)){
            console.log("VOCÊ ESTA TENTANDO SACAR UM VALOR INVALIDO (LETRAS). POR FAVOR DIGITE APENAS NUMEROS")
            return sacar(contaLogada,contasCriadas,menuConta,volta)
        }

        //VERIFICAÇÃO SER O VALOR PARA SAQUE ESTA CORRETO E DENTRO DO LIMITE
        if (contaLogada.saldo < valorSaque || valorSaque <= 0) {
            console.log("VOCÊ ESTA TENTANDO SACAR UM VALOR QUE NÃO POSSUI OU UM VALOR INVALIDO")
            //VOLTA PARA O MENU CONTA
            return menuConta(contaLogada,contasCriadas,volta)
            
        }
        else{
            contaLogada.saldo -= valorSaque
            contaLogada.extrato.push(`Foi realizado um Saque de R$${valorSaque} na conta \n TOTAL NA CONTA: ${contaLogada.saldo}`)
            return menuConta(contaLogada,contasCriadas,volta)
        }
    })
}

export default sacar
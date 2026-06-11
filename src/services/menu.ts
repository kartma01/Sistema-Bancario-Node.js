    import rl from "../services/rl";
    import FormacaoConta from "./criacaoContas"
    import { login } from "./LoginConta";
    import menuConta from "./menuConta";
    import { Cliente } from "../models/modeloCliente";

    function menuPrincipal (contasCriadas : Cliente[]){
        rl.question(
                "Opção de (1) CRIAÇÃO DE USUARIO - OU - (2) LOGIN COMO USUARIO \n OPÇÃO: "
            ,
            (opcao) => {

                if (opcao != "1" && opcao != "2") {
                    console.log("OPÇÃO INVALIDA");

                    return menuPrincipal(contasCriadas);
                }

                if (opcao === "1") {
                    FormacaoConta(contasCriadas,menuPrincipal)   
                }

                if (opcao === "2") {
                    rl.question("Login: ", (loginDigitado) => {
                        rl.question("Senha: ", (senhaDigitada) => {
                          let contaLogada = login(contasCriadas,loginDigitado,senhaDigitada)
                            if (contaLogada){
                                menuConta(contaLogada, contasCriadas, menuPrincipal)
                            }else{
                                console.log("Conta não encontrada")
                                return menuPrincipal(contasCriadas);
                            }
                        })
                    })  

                }
            })
    }

    export default menuPrincipal
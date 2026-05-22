    import rl from "./rl.js";
    import FormacaoConta from "./criacaoContas.js"
    import login from "./LoginConta.js";
    import menuConta from "./menuConta.js";

    function menuPrincipal (contasCriadas){
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
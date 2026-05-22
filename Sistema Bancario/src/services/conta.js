function CriacaoDeConta (id,nome,login,senha){
    return{
        id,
        login,
        senha,
        nome,
        saldo: 0,
        extrato: []
    }
}

function adicionarConta(localDasContas,informacoes){
    localDasContas.push(informacoes)
}

export  {CriacaoDeConta, adicionarConta}
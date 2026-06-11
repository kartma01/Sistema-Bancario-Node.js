function login(contasCriadas,loginDigitado,senha){
    const contaEncontrada = contasCriadas.find(
    conta => conta.login === loginDigitado && 
             conta.senha === senha
    )

    return contaEncontrada
}


export default login




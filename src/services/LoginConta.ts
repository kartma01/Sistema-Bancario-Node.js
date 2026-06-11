import { Cliente } from "../models/modeloCliente"

export const login = (contasCriadas: Cliente[], loginDigitado: string, senha: string) => {
    const contaEncontrada = contasCriadas.find(
    conta => conta.login === loginDigitado && 
             conta.senha === senha
    )

    return contaEncontrada
}





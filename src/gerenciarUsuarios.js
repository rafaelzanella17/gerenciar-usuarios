const usuarios = ['matheus', 'marcos', 'lucas', 'joao']

function retornaUsuario() {
    return usuarios
}

function adicionaNovoUsuario(nome) { 
  usuarios.push(nome) 
}

module.exports = { retornaUsuario, adicionaNovoUsuario }

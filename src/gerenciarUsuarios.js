const usuarios = [
  { name: 'Matheus', email: 'matheus@email.com' },
  { name: 'Marcos', email: 'marcos@email.com' },
  { name: 'Lucas', email: 'lucas@email.com' },
  { name: 'João', email: 'joao@email,com' }
]

function retornaUsuarios() {
    return usuarios
}

function adicionarNovoUsuario(nome, mail) { 
  usuarios.push({ name: nome, email: mail }) 
}

module.exports = { retornaUsuarios, adicionarNovoUsuario }
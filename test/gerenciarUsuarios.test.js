const { expect } = require('chai')
const { retornaUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios')

describe('Testar funções de Gerenciar Usuarios', () => {
  it('Deve adicionar um novo usuário com email', () => {
    adicionarNovoUsuario('Pedro', 'pedro@email.com')

    const listaDeUsuarios = retornaUsuarios()

    expect(listaDeUsuarios.at(-1)).to.eql({ name: 'Pedro', email: 'pedro@email.com' })
  })

  it('Deve adicionar um novo usuário com email não válido', () => {
     adicionarNovoUsuario('Tome', 'tome&&email.com')

    const listaDeUsuarios = retornaUsuarios()

    expect(listaDeUsuarios.at(-1)).to.eql({ name: 'Tome', email: 'tome&&email.com' })
  })

  it('Deve adicionar um novo usuário com caracter não válido e email válido', () => {
    adicionarNovoUsuario('!Jud@s', 'judas@email.com')

    const listaDeUsuarios = retornaUsuarios()

    expect(listaDeUsuarios.at(-1)).to.eql({ name: '!Jud@s', email: 'judas@email.com' })
  })

})
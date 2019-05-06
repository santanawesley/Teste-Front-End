import React from 'react'
import Transacao from '../transacao'

const transacao = new Transacao()

it('Transacao deve ser uma função', () => {
  expect(typeof Transacao).toBe('function')
})

it('resetTransacao deve ser uma função', () => {
  expect(typeof transacao.resetTransacao).toBe('function')
})

it('setData deve ser uma função', () => {
  expect(typeof transacao.setData).toBe('function')
})

it('add deve ser uma função', () => {
  expect(typeof transacao.add).toBe('function')
})

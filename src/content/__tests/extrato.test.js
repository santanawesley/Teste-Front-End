import Extrato from '../extrato'

const extrato = new Extrato()

it('Extrato deve ser uma função', () => {
  expect(Extrato).toBeInstanceOf(Function)
})

it('tipoSaldo deve ser uma função', () => {
  expect(extrato.tipoSaldo).toBeInstanceOf(Function)
})

it('showItens deve ser uma função', () => {
  expect(typeof extrato.showItens).toBe('function')
})

it('Retorno de tipoSaldo deve ser uma string', () => {
  expect(typeof extrato.tipoSaldo()).toBe('string')
})

it('Retorno de tipoSaldo existe length', () => {
  expect(extrato.tipoSaldo().length > 0).toBe(true)
})

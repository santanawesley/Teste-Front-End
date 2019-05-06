import React from "react"
import { expect } from "chai"
import Controle from "../controleFinan"

const controle = new Controle()

it('modulo controle deve ser uma função', () => {
  expect(Controle).to.be.a('function')
})

it('modulo addTransacao deve ser uma função', () => {
  expect(controle.addTransacao).to.be.a('function')
})

it('modulo deleteTransacao deve ser uma função', () => {
  expect(controle.deleteTransacao).to.be.a('function')
})

it('modulo persistData deve ser uma função', () => {
  expect(controle.persistData).to.be.a('function')
})

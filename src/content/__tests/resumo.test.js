import Resumo from "../resumo/resumo"

const resumo = new Resumo()

it('Se valor negativo deverá retornar string Negativo', () => {
  const listagem = [
    { tipo: "-", nome: "Notebook", valor: "150.00" },
    { tipo: "+", nome: "Notebook", valor: "50.00" }
  ]
  expect(resumo.calcResumo(listagem)).toBe('Negativo')
})

it('Se valor positivo deverá retornar string Positivo', () => {
  const listagem = [
    { tipo: "+", nome: "Geladeira", valor: "150.00" },
    { tipo: "-", nome: "Geladeira", valor: "50.00" }
  ]
  const calc = resumo.calcResumo(listagem)
  expect(calc).toBe('Positivo')
})

it('Se valor neutro (zero) deverá retornar string Positivo', () => {
  const listagem = [
    { tipo: "+", nome: "Mesa com 6 cadeiras", valor: "50.00" },
    { tipo: "-", nome: "Mesa com 6 cadeiras", valor: "50.00" }
  ]
  const calc = resumo.calcResumo(listagem)
  expect(calc).toBe('Positivo')
})

it('Se for passado um array vazio deve retonar string Positivo', () => {
  const listagem = []
  const calc = resumo.calcResumo(listagem)
  expect(calc).toBe('Positivo')
})

it('Conferir se valor eh uma string', () => {
  const listagem = []
  const calc = resumo.calcResumo(listagem)
  expect(typeof calc).toBe('string')
})

it('Se existe length do valor', () => {
  const listagem = []
  const calc = resumo.calcResumo(listagem)
  expect(calc.length > 0).toBeTruthy()
})

export function CurrencyFormater(value = 0 ) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default CurrencyFormater

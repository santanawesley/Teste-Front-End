import React, { Component } from 'react'
import Currency from '../helper'

class Resumo extends Component {
  constructor(props) {
    super(props)
    this.state = { compra: 0 , venda: 0, saldo: '' }
  }

  componentDidMount() {
    const listagem = JSON.parse(window.localStorage.getItem('transacoes') || '[]')
    this.calcResumo(listagem)
  }

  render() {
    const { venda, compra } = this.state

    return (
      <div className='tela-resumo'>
        <h1 className='titulo-resumo'> Resumo das transações </h1>
        <div className='div-resumo'>
          <table className='table-resumo'>
            <thead>
              <tr>
                <th className='tipos-resumo'> Tipo de Transação </th>
                <th className='titulo-vl-resumo'> Valor </th>
              </tr>
            </thead>
            <tbody className='tipos-resumo'>
              <tr>
                <td> Venda </td>
                <td className='valores-resumo'> 
                  {Currency(Number(venda))} 
                </td>
              </tr>
              <tr>
                <td> Compra </td>
                <td className='valores-resumo'> 
                  {Currency(Number(compra))} 
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td> Total </td>
                <td className='valores-resumo'> 
                  {Currency(compra + venda)} 
                </td>
              </tr>
            </tfoot>
          </table>
          <div className='tipo-saldo-res'>({this.state.saldo})</div>
        </div>
      </div>
    )
  }

  calcResumo(listagem) { 
    // console.log('listagem = ', listagem)
    let compra = 0 
    let venda = 0
    let saldo = 0

    listagem.map(transacao => {
      const { tipo, valor } = transacao
      tipo === '-' ? compra -= +valor : venda += +valor 
    })

    saldo = -compra > venda ? 'Negativo' : 'Positivo' 
    this.setState({ compra, venda, saldo })
    return saldo
  }
}

export default Resumo

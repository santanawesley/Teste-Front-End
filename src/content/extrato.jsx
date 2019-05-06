import React, { Component } from 'react'
import Currency from './helper'

let saldo = 0

class Extrato extends Component {
  constructor(props) {
    super(props)

    const transacao = { saldo: 0, tipoSaldo: '' }
    this.state = { transacao }
  }

  componentWillUpdate() {
    saldo = 0
  }

  render() {
    return (
      <div className='extrato'>
        <h1 className='titulo-extrato'> Extrato de transações </h1>
        <div>
          <table className='table-extrato'>
            <thead>
              <tr>
                <th></th>
                <th className='th-second-extrato'> Mercadoria </th>
                <th className='th-third-extrato'> Valor </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {this.showItens()}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td> Total </td>
                <td className='saldoFinal'> 
                  {Currency(saldo)} <br/> <span className='balanco-final'>({this.tipoSaldo()})</span>
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    )
  }

  showItens() {
    return (
      this.props.listagem.map((transacao, idx) => {

        if (transacao.tipo == '+') {
          saldo += (+transacao.valor)
        } else {
          saldo -= (+transacao.valor)
        }

        return (
          <tr key={idx}>
            <td className='first-col-extrato'> {transacao.tipo} </td>
            <td className='second-col-extrato'> {transacao.nome} </td>
            <td className='third-col-extrato'> 
              {Currency(Number(transacao.valor))} 
            </td>
            <td className='last-col-extrato'> 
              <a href='#' onClick={(e) => this.props.deleteTransacao(idx)}>
                <i className="fa fa-trash"></i> 
              </a>
            </td>
          </tr>
        )
      })
    )
  }

  tipoSaldo() {
    let tipoSaldo = ''
    if(saldo > 0) { tipoSaldo = 'LUCRO'}
      else if(saldo < 0) {tipoSaldo = 'PREJUÍZO'}
      else {tipoSaldo = ' - '}
    return tipoSaldo
  }
}

export default Extrato

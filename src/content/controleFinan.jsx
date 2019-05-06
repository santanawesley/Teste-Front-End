import React, { Component } from 'react'
import Transacao from './transacao'
import Extrato from './extrato'

export default class ControleFinan extends Component {
  constructor(props){
    super(props)

    const listagem = JSON.parse(window.localStorage.getItem('transacoes') || '[]')

    this.state = { listagem }
    this.deleteTransacao = this.deleteTransacao.bind(this)
    this.addTransacao = this.addTransacao.bind(this)
  }

  addTransacao(transacao){
    const { listagem } = this.state
    listagem.push(transacao)
    this.setState({ listagem })
    this.persistData(this.state.listagem)
  }

  deleteTransacao(idx){
    const decisao = window.confirm('Você tem certeza que deseja excluir essa transação?')
    if(decisao)
      this.deleteTransacaoYes(idx)
  }

  deleteTransacaoYes(idx){
    const listagem = this.state.listagem
    listagem.splice(idx, 1)
    this.setState({ listagem })
    this.persistData(this.state.listagem)
  }

  persistData(data, key = 'transacoes') {
    localStorage.setItem(key, JSON.stringify(data))
  }

  render() {
    return (
      <div className='corpo'>
        <Transacao addTransacao={this.addTransacao}/>
        <Extrato
          listagem={this.state.listagem}
          deleteTransacao={this.deleteTransacao}
        />
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Transacao extends Component {
  constructor(props) {
    super(props)

    const transacao = { tipo: '', nome: '', valor: 0 }
    this.state = { transacao }
    this.setData = this.setData.bind(this)
    this.add = this.add.bind(this)
    this.resetTransacao = this.resetTransacao.bind(this)
  }

  resetTransacao() {
    const transacao = { tipo: '', nome: '', valor: 0 }
    this.setState({ transacao })
  }

  setData(e) {
    if (e.target.name) {
      let { transacao } = this.state 
      transacao[e.target.name] = e.target.value
      this.setState({ transacao })
    }
  }

  add() {
    const { tipo, nome, valor } = this.state.transacao;
    if (!tipo.length || !nome.length || !valor)  {
      return alert ('Preencha todos os campos!')
    }
    this.props.addTransacao(this.state.transacao)
    this.resetTransacao()
  }

  render() {
    const { tipo, nome, valor } = this.state.transacao
    return (
    <div className='transacao'>
      <h1 className='titulo-transacao'> Nova transação </h1>
      <form onChange={(e) => this.setData(e)}>
        <div>
          <div className='tipo field'>
            <label htmlFor="tipoTransacao"> Tipo de transação </label>
            <select id='tipoTransacao' name='tipo' className='input-form' value={tipo}> 
              <option value=""> Escolha </option>
              <option value="-"> Compra </option>
              <option value="+"> Venda </option>
            </select>
          </div>
          <div className='nome field'>
            <label htmlFor="nomeTransacao"> Nome da mercadoria </label>
            <input type='text' className='input-form' id='nomeTransacao' placeholder='Input' name='nome' value={nome}></input>
          </div>
          <div className='valor field'>
            <label htmlFor="valorTransacao"> Valor </label>
            <input type='number' className='input-form' id='valorTransacao' placeholder='R$ 0,00' name='valor' value={valor}></input>
          </div>
        </div>
        <div className='div-add-transacao'>
          <button type='button' className='add-transacao' onClick={this.add}> Adicionar transação </button>
        </div>
      </form>
    </div>
    )
  }
}

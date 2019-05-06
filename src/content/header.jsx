import React from 'react'

export const alternaMenu = (id, classe) => {
  let elemento = document.getElementById(id)
  let classes = elemento.className.split(' ')
  let getIndex = classes.indexOf(classe)

  if (getIndex === -1) {
    classes.push(classe)
  }
  if (getIndex > -1) {
    classes.splice(getIndex, 1)
  }
  elemento.className = classes.join(' ')
}

export default props => (
  <div className='header'>
    <div className='header-content'>
      <div className='cabecalho'>
        <a href='#' className='logo'></a>
        <h1 className='titulo-geral'> Controle Financeiro </h1>
        <a className='show-menu' onClick={ ()=> alternaMenu('menuNav', 'hidden') }> <i className="fa fa-bars"></i></a>
      </div>
      <div id='menuNav' className='tela-menu hidden'>
        <a className='button-close' onClick={ ()=> alternaMenu('menuNav', 'hidden') }> X </a>
        <ul className='lista-menu'>
          <li className='itens-menu'><a href="#" className='menu-item' onClick={ ()=> alternaMenu('menuNav', 'hidden') }> DashBoard </a></li>
          <li className='itens-menu'><a href="#/resumo" className='menu-item' onClick={ ()=> alternaMenu('menuNav', 'hidden') }> Resumo </a></li>
          <li className='itens-menu'><a href="#/configuracoes" className='menu-item' onClick={ ()=> alternaMenu('menuNav', 'hidden') }> Configurações </a></li>
        </ul>
      </div>
    </div>
  </div>
)

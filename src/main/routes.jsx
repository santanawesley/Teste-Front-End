import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import DashBoard from '../content/controleFinan'
import Configuracoes from '../content/configuracoes/config'
import Resumo from '../content/resumo/resumo'

export default props => (
  <Router history={hashHistory}>
    <Route path='/dashboard' component={DashBoard} />
    <Route path='/configuracoes' component={Configuracoes} />
    <Route path='/resumo' component={Resumo} />
    <Redirect from='*' to='/dashboard' />
  </Router>
)
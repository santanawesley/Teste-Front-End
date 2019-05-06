import React from 'react'
import Routes from './routes'
import '../template/main.scss'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import Cabecalho from '../content/header'

export default props => (
    <div className='screen'>
      <Cabecalho />
      <div className='totalidade'>
        <Routes />
      </div>
    </div>
)

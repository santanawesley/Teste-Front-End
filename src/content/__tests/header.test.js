"use strict"
import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'chai'
import { render } from 'enzyme'

import header from "../header"
import { alternaMenu } from "../header"

describe('Renderizar o componente Header', () => {
	it('Renderizar Header sem erros atraves do ReactDOM', () => {
		const div = document.createElement('div')
		ReactDOM.render(<header />, div)
	})

	it('Renderizar Header sem erros com uma função vazia', () => {
		render(<header onChange={() => {}} defaultValue='default value' />)
	})
})

it('modulo header deveria ser uma função', () => {
	expect(header).to.be.a('function')
})

it('alternaMenu deveria ser uma função', () => {
	expect(alternaMenu).to.be.a('function')
})

"use strict"

import Config from "../configuracoes/config"

it('map() should return []', () => {
    expect(Config()).toMatchSnapshot()
})

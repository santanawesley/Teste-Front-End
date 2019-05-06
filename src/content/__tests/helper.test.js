"use strict"

import CurrencyFormater from "../helper"

it('Retorno de valor Formatado em moeda será string', () => {
    expect(typeof CurrencyFormater()).toBe('string')
})

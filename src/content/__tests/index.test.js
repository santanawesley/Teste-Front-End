"use strict"

import Index from "../../index"

it('renders without crashing', () => {
    expect(JSON.stringify(Index)).toMatchSnapshot();
  });
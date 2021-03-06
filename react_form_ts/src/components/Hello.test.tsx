import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name='Fei.H' />);
  expect(hello.find(".greeting").text()).toEqual('Hello Fei.H!')
});
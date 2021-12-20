import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('1 - Crie um componente `<Header />`', () => {
  it('Renderize o componente `<Header />`', () => {
    shallow(<Header />);
  });
});

describe('2 - Renderize um texto no `<Header />`', () => {
  let wrapper;

  it('Renderize o texto "Movie Cards Library" dentro de `<Header />`', () => {
    wrapper = shallow(<Header />);
    expect(wrapper.find('header h1').text()).toBe('Movie Cards Library');
  });
});

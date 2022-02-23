import React from 'react';
const { shallow } = require('enzyme');
const { GifExpertApp } = require('../GifExpertApp');

describe('Prueba en <GifExpertApp/>', () => {
  test('debe mostrarse correctament', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar una lista de categorias', () => {
    const categories = ['TREDING'];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});

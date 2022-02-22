import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de camiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';

    input.simulate('change', { target: { value } });

    // expect (wrapper.find('p').text().trim()).toBe(value );
  });

  test('No dee de postear la información con submit', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault() {},
    });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'Hola Mundo';
    //1. Simular el inputChange
    wrapper.find('input').simulate('change', { target: { value } });
    //2. Simular el submit
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    //3. SetCategories se debe habel Llamado
    expect(setCategories).toHaveBeenCalled();
    //expect( setCategories ).toBeCalledTimes(1); 👉 Cuantas veces esperarias que se llamara
    expect(setCategories).toBeCalledWith(expect.any(Function)); //👉 Esperaria que haya sido llamado por alguna funcion
    //4. El valor del input debe de estar ''
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});

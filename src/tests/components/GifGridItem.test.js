import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
  const title = 'un título';
  const url = 'http://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // test('debe de tener un parrafo con el title', () => {
  //   const p = wrapper.find('p');
  //   expect(p.text().trim()).toBe(title);
  // });

  test('debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');

    console.log(img.props('src'));

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('debe de tener animate__fadeIn', () => {
    const div = wrapper.find('div');

    const className = div.prop('className');

    expect(className.includes('animate__fadeIn')).toBe(true);

    // encaso de evaluar lo contrario seria👇
    //expect(className.includes('animate__fadeIn')).toBe(false);
    // hacer la negacion👇
    // expect(className.includes('animate__fadeIn')).not.toBe(false);
  });
});

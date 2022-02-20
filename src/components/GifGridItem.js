import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title}></img>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

/* 
1. Enzyme
2. Ensyme to json
3. Debe mostrar el componente correctamente
 * shallow
 * wrapper
 * wrapper .toMatchSnapshot()
 */

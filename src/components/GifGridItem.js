import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
  console.log({ id, title, url });
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title}></img>
    </div>
  );
};

/* 
1. Enzyme
2. Ensyme to json
3. Debe mostrar el componente correctamente
 * shallow
 * wrapper
 * wrapper .toMatchSnapshot()
 */

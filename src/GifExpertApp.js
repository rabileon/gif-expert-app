import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Puch',
    'Samurai X',
    'Dragon Ball',
  ]);

  //   const handleAdd = () => {
  //     // setCategories(['HunterXHunter', ...categories]);
  //     setCategories((cats) => [...cats, 'HunterXHunter']);
  //   };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory></AddCategory>
      <hr />
      {/* <button onClick={handleAdd}> Agregar</button> */}
      <ol>
        {categories.map((category) => {
          // El key sirve para react, ahorra que no se tenga que renderizar todo
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

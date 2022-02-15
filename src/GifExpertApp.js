import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['pokemon']);

  //   const handleAdd = () => {
  //     // setCategories(['HunterXHunter', ...categories]);
  //     setCategories((cats) => [...cats, 'HunterXHunter']);
  //   };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}> Agregar</button> */}
      <ol>
        {categories.map((category) => (
          // El key sirve para react, ahorra que no se tenga que renderizar todo

          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

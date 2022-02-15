import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['TRENDING']);

  //   const handleAdd = () => {
  //     // setCategories(['HunterXHunter', ...categories]);
  //     setCategories((cats) => [...cats, 'HunterXHunter']);
  //   };
  return (
    <>
      <h1 className="title-app">Gif Expert App</h1>
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

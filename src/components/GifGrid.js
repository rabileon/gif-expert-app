import React, { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   getGifs(category).then((imgs) => setImages(imgs));
  // }, [category]);

  const { loading } = useFetchGifs();

  return (
    <>
      <h3>{category}</h3>
      {loading ? 'Cargando...' : 'Data cargada'}
      {/* <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div> */}
    </>
  );
};

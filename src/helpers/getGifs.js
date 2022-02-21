export const getGifs = async (category) => {
  let url = 'https://api.giphy.com/v1/gifs/';
  let limit = 'limit=15';
  let apiKey = 'api_key=yQakWTddPvTxRs0ld2SAyuTcQWkxreLb';

  if (category.toUpperCase() == 'TRENDING') {
    url = `${url}trending?${limit}&${apiKey}`;
  } else {
    url = `${url}search?q=${encodeURI(category)}&${limit}&${apiKey}`;
  }

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};

import { getGifs } from '../../../helpers/getGifs';

describe('Prueba con getGifs Fetch', () => {
  test('debe de traer 10 elementos', async () => {
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBe(15);
  });

  test('empty category', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});

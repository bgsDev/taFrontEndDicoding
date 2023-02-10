/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import btn from '../src/scripts/utils/actionDetail';
import * as helperTes from './helper/tesSf';
import FavoriteRestoIdb from '../src/scripts/data/idb';

describe('test btn subscribe ', () => {
  const btnSubscribe = () => {
    document.body.innerHTML = `
            <button style="background-color:darkred" id="btnSubscribe">subscribe</button>
        `;
  };
  beforeEach(() => {
    btnSubscribe();
  });
  it('memastikan text yang tampil ketika telah di subscribe', async () => {
    await helperTes.initBtnActionDetail({ id: 1 });
    // eslint-disable-next-line eqeqeq
    const btnAction = document.getElementById('btnSubscribe');

    expect(btnAction.innerHTML == 'subscribe')
      .toBeTruthy();
  });

  it('memastikan bahwa bukan btn unsubscribe', async () => {
    await helperTes.initBtnActionDetail({ id: 1 });
    // eslint-disable-next-line eqeqeq
    const btnAction = document.getElementById('btnSubscribe');
    expect(btnAction.innerHTML == 'unsubscribe')
      .toBeFalsy();
  });

  it('menguji action penyimpanan tersubscribe', async () => {
    await helperTes.initBtnActionDetail({
      id: 1,
    });

    document.querySelector('#btnSubscribe').dispatchEvent(new Event('click'));

    const dt = await FavoriteRestoIdb.get(1);
    expect(dt).toEqual({ id: 1 });

    await FavoriteRestoIdb.delete(1);
  });

  it('restoran sudah di subscribe', async () => {
    await helperTes.initBtnActionDetail({
      id: 1,
    });
    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestoIdb.put({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#btnSubscribe').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAll()).toEqual([{ id: 1 }]);
    FavoriteRestoIdb.delete(1);
  });

  it('Data film tidak memiliki ID', async () => {
    await helperTes.initBtnActionDetail({});

    document.querySelector('#btnSubscribe').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAll()).toEqual([]);
  });
});

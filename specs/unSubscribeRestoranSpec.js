/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import btn from '../src/scripts/utils/actionDetail';
import * as helperTes from './helper/tesSf';
import FavoriteRestoIdb from '../src/scripts/data/idb';

describe('test btn unsubscribe ', () => {
  const btnSubscribe = () => {
    document.body.innerHTML = `
            <button style="background-color:darkred" id="btnSubscribe">subscribe</button>
        `;
  };
  beforeEach(() => {
    btnSubscribe();
  });

  afterEach(async () => {
    await FavoriteRestoIdb.delete(1);
  });

  it('memastikan text yang tampil ketika telah di like / di subscribe', async () => {
    await FavoriteRestoIdb.put({ id: 1 });
    await helperTes.initBtnActionDetail({
      id: 1,
    });
    // eslint-disable-next-line eqeqeq
    const btnAction = document.getElementById('btnSubscribe');

    expect(btnAction.innerHTML == 'unsubscribe')
      .toBeTruthy();
  });

  it('memastikan bahwa bukan btn subscribe', async () => {
    await FavoriteRestoIdb.put({ id: 1 });
    await helperTes.initBtnActionDetail({
      id: 1,
    });
    // eslint-disable-next-line eqeqeq
    const btnAction = document.getElementById('btnSubscribe');
    expect(btnAction.innerHTML == 'subscribe')
      .toBeFalsy();
  });

  it('menguji action remove / pembatalan subscribe', async () => {
    await FavoriteRestoIdb.put({ id: 1 });
    await helperTes.initBtnActionDetail({
      id: 1,
    });

    document.querySelector('#btnSubscribe').dispatchEvent(new Event('click'));

    const dt = await FavoriteRestoIdb.getAll();
    expect(dt).toEqual([]);
  });

  it('memberikan inner html yang pasti jika restoran yang tidak disukai tidak ada dalam daftar', async () => {
    await FavoriteRestoIdb.put({ id: 1 });
    await helperTes.initBtnActionDetail({
      id: 1,
    });
    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestoIdb.delete(1);
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#btnSubscribe').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAll()).toEqual([]);
  });
});

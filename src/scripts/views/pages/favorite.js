/* eslint-disable linebreak-style */
import FavoriteRestoIdb from '../../data/idb';
import CONFIG from '../../globals/config';

const pageFavorite = {
  async render() {
    // eslint-disable-next-line quotes
    return `<div id="listResto" class="wrapper content">
      <h3>Tidak ada restoran yang ditampilkan</h3>
    </div>`;
  },
  async afterRender() {
    const dt = await FavoriteRestoIdb.getAll();
    const listResto = document.getElementById('listResto');
    let chtml = '';

    dt.forEach((v) => {
      // eslint-disable-next-line max-len
      // <img class="imgRadius" src="${CONFIG.BASE_IMAGE_URL + v.pictureId}" alt="profil restoran"></img>
      chtml += `<div class='box'>
                    <figure>
                      <picture>
                        <source media="(max-width: 600px)" class="imgRadius lazyload"  type="image/webp" data-srcset="${CONFIG.BASE_IMAGE_URLS + v.pictureId}">
                        <img class="imgRadius lazyload"  data-src="${CONFIG.BASE_IMAGE_URLM + v.pictureId}" alt="profil restoran">
                      </picture>
                    </figure>
                    <div class="title">
                      <div class="rating">
                        <span>⭐️${v.rating}</span>
                      </div>
                      <div class="nmResto">
                        <a href="${window.location.origin}/#/detail/${v.id}" class="">${v.name}</a>
                      </div>                        
                    </div>
                    <p>${v.description.substring(0, 100)}...</p>
                </div>`;
    });
    if (chtml.length > 1) {
      listResto.innerHTML = chtml;
    }
  },
};
export default pageFavorite;

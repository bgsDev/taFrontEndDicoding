/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import wscomponent from '../../data/wscomponent';
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const pageHome = {
  // <img class="herosImg" src="heros/hero-image_2.jpg" alt="chef resto">
  async render() {
    return `
      <article id="heros">
        <figure>
          <picture>
            <source media="(max-width: 600px)" class="herosImg lazyload" type="image/webp" srcset="heros/hero-image_2.webp">
            <source media="(max-width: 600px)" class="herosImg lazyload" type="image/jpeg" srcset="heros/hero-image_2.jpg">
            <img class="herosImg lazyload" src="heros/hero-image_2.jpg" alt="chef resto">
          </picture>
        </figure>
        <div class="herosContent content">
          <h2 class="title">Restoran Zam -Zam</h2>
          <p class="description">sebuah tempat makan yang berada di Sumbawa Barat. Rumah makan ini menyajikan 
            berbagai menu khas Sumbawa yang dibanderol dengan harga yang murah dan bersahabat dengan kantong Anda. 
            Jika Anda mencari daftar harga, Anda berada di tempat yang tepat. Di bawah ini akan dibahas 
            secara lengkap menu apa saja yang dijual beserta harganya.
          </p>
          <button class="blueLangit" style="text-align:left" >Read More</button>
        </div>
      </article>
      <hr>
      <div id="listResto" class="wrapper content">
      </div>
    `;
  },
  async afterRender() {
    const list = await wscomponent.listRestoran();
    const listResto = document.getElementById('listResto');
    let chtml = '';
    list.restaurants.forEach((v, i) => {
      // if (i === 0) {
      // }<img class="imgRadius" src="" alt="profil restoran">
      chtml += `<div class='box'>
                    <figure>
                      <picture>
                        <source media="(max-width: 600px)" class="imgRadius lazyload" type="image/webp" srcset="${CONFIG.BASE_IMAGE_URLS + v.pictureId}">
                        <img class="imgRadius lazyload" src="${CONFIG.BASE_IMAGE_URLM + v.pictureId}" alt="profil restoran">
                      </picture>
                    </figure>
                    <div class="title">
                      <div class="rating">
                        <span>⭐️${v.rating}</span>
                      </div>
                      <div class="nmResto">
                        <a href="${window.location.origin}/#/detail/${v.id}">${v.name}</a>
                      </div>                        
                    </div>
                    <p>${v.description.substring(0, 100)}...</p>
                </div>`;
    });
    listResto.innerHTML = chtml;
  },
};
export default pageHome;

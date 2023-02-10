/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import wscomponent from '../../data/wscomponent';
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import * as sfPage from '../templates/sfPage';
import btn from '../../utils/actionDetail';

const pageDetail = {
  async render() {
    return `
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const drestoran = await wscomponent.detailRestoran(url.id);
    const dt = drestoran.restaurant;
    // dt.subscribe = 1;
    const mainx = document.getElementById('maincontent');

    let makanan = ``;
    dt.menus.foods.forEach((v1) => {
      makanan += `
        <div class="boxDetail">
          <button class="wfull">${v1.name}</button>
        </div>
      `;
    });

    let minuman = ``;
    dt.menus.drinks.forEach((v1) => {
      minuman += `
        <div class="boxDetail">
          <button class="wfull">${v1.name}</button>
        </div>
      `;
    });

    // <img class="herosImg" src="${CONFIG.BASE_IMAGE_URL + dt.pictureId}" alt="restoran"></img>
    mainx.innerHTML = `
      <article id="heros" class='box boxheroDetail'>
        <figure>
          <picture>
            <source media="(max-width: 600px)"  class="herosImg lazyload" type="image/webp" srcset="${CONFIG.BASE_IMAGE_URLS + dt.pictureId}">
            <img  class="herosImg lazyload" src="${CONFIG.BASE_IMAGE_URLM + dt.pictureId}" alt="profil restoran">
          </picture>
        </figure>
        <div class="title boxheroDetail" style="margin: auto; grid-template-columns: 30% 40% 30%;background-color: white;">
          <div class="rating">
            <span>⭐️${dt.rating}</span>
          </div>
          <div class="nmResto ">
            <a href="#" class="font15" class="">${dt.name}</a>
          </div>     
          <div  style="border-radius: 0px 0px 15px 15px;">
            ${(dt.subscribe === undefined ? sfPage.btnUnsubscribe() : sfPage.btnSubscribe())}
          </div>                   
        </div>
        <div class="detailInformasi">
          <div class="boxDetail">
            <p style="width:100%;">${dt.description}</p>
          </div>
          <div class="boxDetail">
            <h3>Information</h3>
            <h4>Kota</h4>
            <p>${dt.city}</p>
            <h4>Alamat</h4>
            <p>${dt.address}</p>
          </div>
        </div>
        <hr>
      </article>
      <div class="wrapperDetail">
        <div class='box'>
          <div class="titleList">
            <div class="nmResto">
              <a href="#" class="font15">Daftar Makanan</a>
            </div>                        
          </div>  
          <hr>
          <div class="listResto">
            ${makanan}
          </div>
        </div>
        <div class='box'>
          <div class="titleList" style="background-color: #8DCBE6;">
            <div class="nmResto">
              <a href="#" class="font15">Daftar Minuman</a>
            </div>                        
          </div>  
          <hr>
          <div class="listResto">
            ${minuman}
          </div>
        </div>
      </div>

      <div class='box boxheroDetail' style="margin:5% auto 5% auto; max-width:1200px;">
        <h3 class="judul" style="background: cadetblue; padding:20px">Customer Reviews</h3>
        <div class="reviewHeader">  
          <button style="background:yellowgreen" id="baddReview">
            new review
          </button>
        </div>
        <div style="padding:5px;" id="listReview">
          ${sfPage.listReview(dt.customerReviews)}
        </div>
      </div>
    `;
    btn.init({
      idBtn: document.getElementById("btnSubscribe"),
      dt: {
        id: dt.id,
        name: dt.name,
        description: dt.description,
        rating: dt.rating,
        pictureId: dt.pictureId,
      },
    });
    btn.initReviuw({
      idBtn: document.getElementById("baddReview"),
    });
  },
};
export default pageDetail;

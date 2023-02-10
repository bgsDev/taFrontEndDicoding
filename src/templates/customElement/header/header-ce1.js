/* eslint-disable linebreak-style */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class headerce extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set head1(_cev) {
    // console.log('connected!');
    this.img = _cev.img || null;
    this.nmApp = _cev.nmApp || null;
    this.exHead1();
  }

  // eslint-disable-next-line class-methods-use-this
  cssHead1() {
    return `
      <style>
        header-ce{
            display: grid;
            padding: 10px;
            margin-bottom: 1%;
            grid-template-columns: repeat(3, 1fr);
            box-shadow: 2px 2px 2px 2px #888888;
            
            align-items: center;
        }
        header-ce img{
            width: 40px;
            height: 40px;
        }
        header-ce h1{
            font-size: 15px;
            text-align: center;
        }
        header-ce .menu{
            font-size: 15px;
            margin: 10px auto;
            display: block;
            width: 30px;
            text-align: end;
            display: grid;
            align-items: center;
        }
        header-ce .logo{
            display: flex;
            justify-content: center;
        }
        @media screen and (min-width: 600px) {
          header-ce{
            grid-template-columns: repeat(2, 1fr);
          }
          header-ce img{
            width: 80px;
            height: 80px;
          }
          header-ce h1{
            font-size: 20px;
            text-align: left;
          }
          header-ce .menu{
            display:none !important;
          }
        }
        @media screen and (min-width: 900px) {
          header-ce{
            grid-template-columns: none;
            grid-template-rows: repeat(2, 1fr);;
          }
          header-ce h1{
            font-size: 20px;
            text-align: center;
          }
        }
      </style>
    `;
  }

  exHead1() {
    // this.attachShadow({ mode: 'open' }); <img  src="${this.img}" alt="logo Zam -Zam">
    this.innerHTML = `
        ${this.cssHead1()}
        <div class="item logo">
          <picture>
            <source class="lazyload"  type="image/webp" srcset="${this.img}.webp">
            <source class="lazyload"  type="image/jpeg" srcset="${this.img}.jpg">
            <img class="lazyload"  src="${this.img}.jpg" alt="profil restoran">
          </picture>
        </div>
        <div class="item">
            <h1>${this.nmApp}</h1>
        </div>
        <a id="menu" href="#" class="menu">☰</a>
    `;
  }
}
customElements.define('header-ce', headerce);

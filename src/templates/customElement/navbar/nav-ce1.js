/* eslint-disable linebreak-style */
class navce extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    // console.log('constructed!');
  }

  set nav1(_cev) { // Custome Element Value
    // console.log('connected!');
    this.idx = _cev.id || null;
    this.list = _cev.list || null;
    this.renderNav1();
  }

  cssNav1() {
    return `
      <style>
        #${this.idx}{
            z-index: 10; 
            width: 300px;
            position: absolute;
            -webkit-transform: translate(-300px, 0);
            transform: translate(-300px, 0);
            transition: transform 0.3s ease;
            background-color: white;
        }
        .navOpen {
            -webkit-transform: translate(0, 0) !important;
            transform: translate(0, 0) !important;
        }
        
        #${this.idx} .nav_list{
            width: 100%;
            padding: 0px;
            margin: 0px;
            list-style-type: none;
        }
        #${this.idx} .nav_list .nav__item {
            display: list-item;
            border-bottom: 1px solid #E0E0E0;
            width: 100%;
            text-align: left; 
        }
        #${this.idx} a {
            display: inline-block;
            padding: 1.3em;
            text-decoration: none;
            color: #616161;
            display: grid;
        }
        #${this.idx} a:hover {
            text-decoration: underline;
            color: blue;
        }

        @media screen and (min-width: 600px) {
          #${this.idx} {
            width: 100% !important;
            text-align: center; 
            background-color: #4B5D67 !important;
            position: relative !important;
            z-index:0;
            display: block !important;
            -webkit-transform: translate(0, 0) !important;
            transform: translate(0, 0) !important; 
          }
          #${this.idx} a {
              font-size: 12px !important;
              color:white !important;
              align-items: center;
          }
          #${this.idx} .nav_item{
            display: inline-block;
            width: 24%;
            text-transform: uppercase;
            box-sizing: border-box;
            line-height: 24px;
          }
        }
    </style>
    `;
  }

  renderNav1() {
    let fhtml = '';
    this.list.forEach((v) => {
      fhtml += `<li class="nav_item"><a href="${v.url}">${v.value}</a></li>`;
    });
    this.innerHTML = `
        ${this.cssNav1()}
        <nav id="${this.idx}" class="nav ">
            <ul class="nav_list">
                ${fhtml}
            </ul>
        </nav>
    `;
  }
}
customElements.define('nav-ce', navce);

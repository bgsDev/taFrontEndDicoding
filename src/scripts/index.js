import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import '../styles/responsive.css';

// customElements
import '../templates/customElement/skip-link';
import '../templates/customElement/header/header-ce1';
import '../templates/customElement/navbar/nav-ce1';
import '../templates/customElement/modal/modal-ce';

// service worker
import swRegister from './utils/sw-register';

// web socket
// import WebSocketInitiator from './utils/websocket-initiator';

// modal suffort
import sfmodal from './utils/sfLib/modal';

import CONFIG from './globals/config';

// pages
import App from './views/app';

// create html
const headce = document.querySelector('header-ce');
headce.head1 = {
  img: 'dev-blankx',
  nmApp: 'Restaurant Zam-Zam',
};
const navce = document.querySelector('nav-ce');
navce.nav1 = {
  id: 'nav1',
  list: [
    { value: 'Home', url: '#/home' },
    { value: 'Favorite', url: '#/favorite' },
    { value: 'About Us', url: '#/home' },
  ],
};

const modal = document.querySelector('modal-ce');
modal.modal1 = {
  idx: CONFIG.MODAL,
};
sfmodal.init({});

// _initialAppShell
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#nav1'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('load', () => {
  sfmodal.loading();
  app.renderPage();
  swRegister();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
  sfmodal.close();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

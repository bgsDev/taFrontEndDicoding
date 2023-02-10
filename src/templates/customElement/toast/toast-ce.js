/* eslint-disable linebreak-style */
class toastce extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set toast1(_cev) {
    // console.log('connected!');
    this.exToast1();
  }

  // eslint-disable-next-line class-methods-use-this
  cssToast1() {
    return `
        <style>
        #snackbar {
            visibility: hidden;
            min-width: 250px;
            margin-left: -125px;
            background-color: #333;
            color: #fff;
            text-align: center;
            border-radius: 2px;
            padding: 16px;
            position: fixed;
            z-index: 1;
            left: 50%;
            bottom: 30px;
          }
          #snackbar.show {
            visibility: visible;
            -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
            animation: fadein 0.5s, fadeout 0.5s 2.5s;
          }
          @-webkit-keyframes fadein {
            from {bottom: 0; opacity: 0;}
            to {bottom: 30px; opacity: 1;}
          }
          @keyframes fadein {
            from {bottom: 0; opacity: 0;}
            to {bottom: 30px; opacity: 1;}
          }
          @-webkit-keyframes fadeout {
            from {bottom: 30px; opacity: 1;}
            to {bottom: 0; opacity: 0;}
          }
          @keyframes fadeout {
            from {bottom: 30px; opacity: 1;}
            to {bottom: 0; opacity: 0;}
          }
        </style>
      `;
  }

  exToast1() {
    // this.attachShadow({ mode: 'open' });
    this.innerHTML = `
          ${this.cssToast1()}
          <div id="snackbar">Some text some message..</div> 
          <button onclick="myFunction()">Show Snackbar</button>
      `;
  }
}
customElements.define('toast-ce', toastce);

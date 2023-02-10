/* eslint-disable linebreak-style */
/* eslint-disable no-useless-constructor */
/* eslint-disable linebreak-style */
class skipLink extends HTMLElement {
  constructor() {
    super();
    // console.log('constructed!');
  }

  connectedCallback() {
    // console.log('connected!');
    this.href = this.getAttribute('href') || null;
    this.value = this.getAttribute('value') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .skip-link {
          position: absolute;
          top: -60px;
          left: 0;
          padding: 8px;
          background-color: #46d4ff;
          color: white;
          z-index: 100;
        }
        .skip-link:focus {
          top: 0;
        }
      </style>
      <a href="${this.href}" class="skip-link">${this.value}</a>
    `;
  }
}
customElements.define('skip-link', skipLink);

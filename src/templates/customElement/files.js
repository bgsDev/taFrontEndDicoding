/* eslint-disable linebreak-style */
class example extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    // console.log('constructed!');
  }

  connectedCallback() {
    // console.log('connected!');
    this.img = this.getAttribute('img') || null;
    this.nmApp = this.getAttribute('nmApp') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
      </style>
      `;
  }
}
customElements.define('example', example);

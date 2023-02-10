/* eslint-disable linebreak-style */
const pageAbout = {
  async render() {
    // eslint-disable-next-line quotes
    return `sasa`;
  },
  async afterRender() {
    document.querySelector('main').innerHTML = 'Bagus H';
  },
};
export default pageAbout;

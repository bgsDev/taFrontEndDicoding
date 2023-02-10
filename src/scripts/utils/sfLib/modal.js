import CONFIG from '../../globals/config';

const sfmodal = {
  // eslint-disable-next-line object-curly-newline
  async init({ id }) {
    this.id = (id === undefined ? CONFIG.MODAL : id);
    this.xloading = false;
    // title, btnClose, body, footer
    this.title = document.getElementById('bmodalTitle');
    this.btnClose = document.getElementById('bmodalClose');
    this.body = document.getElementById('bmodalBody');
    this.footer = document.getElementById('bmodalfooter');
    this.btnFooter = document.getElementById('btnFooter');

    this.content = document.getElementById('bmodalContent');
    this.modal = document.getElementById(this.id);

    this.btnClose.addEventListener('click', async () => {
      this.modal.style.display = 'none';
    });
  },
  async set({ title, body, footer }) {
    this.title.innerHTML = title;
    this.body.innerHTML = body;
    this.footer.innerHTML = (footer === undefined ? this._btnClose() : footer);
    this.modal.style.display = 'block';

    this.btnClose1 = document.getElementById('bmodalClose1');
    this.btnClose1.addEventListener('click', async () => {
      this.modal.style.display = 'none';
    });
  },
  _btnClose() {
    // eslint-disable-next-line quotes
    return `<button id="bmodalClose1">Close</button>`;
  },
  _btnSaved(v) {
    // eslint-disable-next-line quotes
    return `<button id="${v.id}" class="${v.cls}">${v.text}</button> <button id="bmodalClose1">Close</button>`;
  },

  async loading() {
    this.btnClose.style.display = 'none';
    this.title.style.display = 'none';
    // this.body.innerHTML = '<img src="ffmpeg/load.mp4" width="100">';
    this.body.innerHTML = `
      <video autoplay loop muted playsinline width='100'>
        <source src="ffmpeg/load.webm" type="video/webm">
        <source src="ffmpeg/load.mp4" type="video/mp4">
      </video>
    `;

    this.body.style.textAlign = 'center';
    this.body.style.borderTop = 'none';

    this.footer.style.display = 'none';

    this.modal.style.display = 'block';

    this.content.style.border = 'none';
    this.content.style.background = 'none';
    this.xloading = true;
  },
  async close() {
    setTimeout(() => {
      this.modal.style.display = 'none';
      if (this.xloading) {
        this.btnClose.style.display = 'unset';
        this.title.style.display = 'unset';
        this.body.innerHTML = '';

        this.body.style.textAlign = 'none';
        this.body.style.borderTop = '1px solid #888';

        this.footer.style.display = 'unset';

        this.content.style.border = '1px solid #888;';
        this.content.style.background = 'white';

        this.xloading = false;
      }
    }, 1000);
  },
};
export default sfmodal;
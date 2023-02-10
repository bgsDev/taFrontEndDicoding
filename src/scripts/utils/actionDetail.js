// eslint-disable-next-line no-unused-vars
import FavoriteRestoIdb from '../data/idb';
import wscomponent from '../data/wscomponent';
import sfmodal from './sfLib/modal';
import * as sfPage from '../views/templates/sfPage';

const btn = {
  async init({ idBtn, dt }) {
    this.idBtn = idBtn;
    this.dt = dt;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this.dt;
    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    const movie = await FavoriteRestoIdb.get(id);
    return !!movie;
  },
  _renderLike() {
    this.idBtn.innerHTML = 'subscribe';
    this.idBtn.addEventListener('click', async () => {
      await FavoriteRestoIdb.put(this.dt);
      this._renderButton();
    });
  },

  _renderLiked() {
    this.idBtn.innerHTML = 'unsubscribe';
    this.idBtn.addEventListener('click', async () => {
      await FavoriteRestoIdb.delete(this.dt.id);
      this._renderButton();
    });
  },

  async initReviuw({ idBtn }) {
    this.breviuw = idBtn;
    this.breviuw.addEventListener('click', async () => {
      this.renderFormReview();
      this.actEntriFormReviuw();
    });
  },
  async renderFormReview() {
    sfmodal.set({
      title: 'Entri Review',
      body: `
        <input type="text" id="username" name="firstname" placeholder="Your name..">
        <input type="text" id="review" name="review" placeholder="review..">
      `,
      footer: sfmodal._btnSaved({
        id: 'bsaved',
        text: 'tambahkan',
        cls: 'blueLangit',
      }),
    });
  },
  async actEntriFormReviuw() {
    const username = document.getElementById('username');
    const review = document.getElementById('review');
    const listReview = document.getElementById('listReview');
    document.getElementById('bsaved').addEventListener('click', async () => {
      const dtreview = await wscomponent.setReview({
        id: this.dt.id,
        name: username.value,
        review: review.value,
      });
      listReview.innerHTML = sfPage.listReview(dtreview.customerReviews);
      sfmodal.close();
    });
  },
};
export default btn;

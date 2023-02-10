/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import btn from '../../src/scripts/utils/actionDetail';

const initBtnActionDetail = async (dt) => {
  await btn.init({
    idBtn: document.querySelector('#btnSubscribe'),
    dt,
  });
};

export { initBtnActionDetail };

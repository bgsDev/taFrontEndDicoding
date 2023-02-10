/* eslint-disable no-unused-vars */
const btnSubscribe = () => '<button id="btnSubscribe" style="background-color:darkred" ></button>';
const btnUnsubscribe = () => '<button id="btnSubscribe" style="background-color:darkred" ></button>';
const listReview = (dt) => {
  let review = '';
  dt.forEach((v1, i1) => {
    if (i1 % 2 === 0) {
      review += `
        <hr>
        <div class="boxDetail boxReview">
          <img src="informasi.png" width="50" alt="icon informasi">
          <div>
            <h4>${v1.name}</h4>
            <span>${v1.review}
              <br><small>${v1.date}</small>
            </span>
          </div>
        </div>
      `;
    } else {
      review += `
        <hr>
        <div class="boxDetail boxReview boxReviewEnd">
          <div>
            <h4>${v1.name}</h4>
            <span>${v1.review}
              <br><small>${v1.date}</small>
            </span>
          </div>
          <img src="informasi.png" width="50" alt="icon informasi">
        </div>
      `;
    }
  });
  return review;
};

export { btnSubscribe, btnUnsubscribe, listReview };

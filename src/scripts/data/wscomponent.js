import API_ENDPOINT from '../globals/api-endpoint';

class wscomponent {
  static async listRestoran() {
    const response = await fetch(API_ENDPOINT.list).then(((resp) => resp.json()));
    return response;
  }

  static async detailRestoran(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id)).then(((resp) => resp.json()));
    return response;
  }

  static async setReview(data) {
    const option = {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    };
    const response = await fetch(API_ENDPOINT.review, option).then(((resp) => resp.json()));
    return response;
  }
}

export default wscomponent;

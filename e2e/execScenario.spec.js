/* eslint-disable no-undef */
Feature('subscribe restoran');

Scenario('action subscribe & unsubscribe restoran', async ({ I }) => {
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');
  await I.waitForText('SUBSCRIBE', 3);
  I.click('#btnSubscribe');
  await I.waitForText('UNSUBSCRIBE', 5);
  I.amOnPage('/#/favorit');
  await setTimeout(() => {
  }, 100);
  I.dontSee('Tidak ada restoran yang ditampilkan');
  I.seeElement('div a');
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');
  await I.waitForText('UNSUBSCRIBE', 3);
  I.click('#btnSubscribe');
  await I.waitForText('SUBSCRIBE', 3);
});
Scenario('action add review restoran', async ({ I }) => {
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');
  await I.waitForText('SUBSCRIBE', 3);
  await I.waitForText('Information', 3);
  await I.waitForText('Alamat', 3);
  I.seeElement('#baddReview');
  await I.click('#baddReview');
  pause();
  await I.waitForText('Entri Review', 3);
  I.fillField('#username', 'Bagus H');
  I.fillField('#review', 'tes scanerio');
  await I.click('#bsaved');
});

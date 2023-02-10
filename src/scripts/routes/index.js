/* eslint-disable linebreak-style */
import pageHome from '../views/pages/home';
import pageAbout from '../views/pages/about';
import pageDetail from '../views/pages/detail';
import pageFavorite from '../views/pages/favorite';

const routes = {
  '/': pageHome, // default page
  '/home': pageHome,
  '/favorite': pageFavorite,
  '/my': pageAbout,
  '/detail/:id': pageDetail,
};

export default routes;

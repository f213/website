import yaMetrika from '~/helpers/yaMetrika';

export default ({ app }) => {
  /* Send hit after each page change */
  app.router.beforeEach((to, _, next) => {
    yaMetrika.hit(to.fullPath);
    next();
  });
};

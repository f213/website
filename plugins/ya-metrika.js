import yaMetrika from '~/helpers/yaMetrika';

export default ({ app }) => {
  app.router.beforeEach((to, _, next) => {
    yaMetrika.hit(to.fullPath);
    next();
  });
};

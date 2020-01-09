import Vue from 'vue';

import yaMetrika from '~/helpers/yaMetrika';

export default ({ app }) => {
  /* Send hit after each page change */
  app.router.beforeEach((to, _, next) => {
    yaMetrika.hit(to.fullPath);
    next();
  });

  /* v-metrika directive */
  Vue.directive('metrika', {
    bind(el, identifier) {
      el.addEventListener('click', () => yaMetrika.reachGoal(identifier.value));
    },
  });
};

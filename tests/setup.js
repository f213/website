import Vue from 'vue';

// Ignore globally registered components
Vue.config.ignoredElements.push(
  'nuxt-link',
  'no-ssr',
  'VLazyImage',
  'Icon',
  'AppModal',
);

Vue.config.productionTip = false;

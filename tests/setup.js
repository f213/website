import Vue from 'vue';

// Ignore globally registered components
Vue.config.ignoredElements.push(
  'nuxt-link',
  'client-only',
  'VLazyImage',
  'Icon',
  'AppModal'
);

Vue.config.productionTip = false;

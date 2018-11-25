import AppContent from '~/components/AppContent.vue';

import { shallowMount } from '@vue/test-utils';

const createWrapper = content => shallowMount(AppContent, { propsData: { content } });

describe('AppContent', () => {
  it('Actual renderes HTML', () => {
    const wrapper = createWrapper('<h1>Test</h1>');

    expect(wrapper.html()).toContain('<div class="app-content"><h1>Test');
  });
});

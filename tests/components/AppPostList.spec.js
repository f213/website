import { shallowMount } from '@vue/test-utils';
import AppPostList from '~/components/AppPostList.vue';

const createWrapper = tag => shallowMount(AppPostList, { propsData: { tag, posts: [] } });

describe('AppPostList', () => {
  it('TagsPageHeading component renders on tags page', () => {
    const wrapper = createWrapper({
      name: 'Имя тега',
    });

    expect(wrapper.html()).toContain('<tagspageheading-stub');
  });

  it('TagsPageHeading component doesn`t render on non-tags page', () => {
    const wrapper = createWrapper({
      name: '',
    });

    expect(wrapper.html()).not.toContain('<tagspageheading-stub');
  });
});

<script>
export default {
  functional: true,
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  render(createElement, { props: { text } }) {
    const vNode = createElement('');
    vNode.text = text;
    return vNode;
  },
};
</script>

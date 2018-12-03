<template>
  <div class="app-content" v-html="content" />
</template>
<script>
export default {
  props: {
    content: { type: String, required: true },
  },
};
</script>

<style>
.app-content {
  ul, ol {
    list-style-type: none;
    padding-left: 1.5rem;

    li:before {
      margin-left: -1rem;
    }
  }

  ul li:before {
    content: '\2014\a0';
  }

  ol {
    counter-reset: ol;
    li:before {
      counter-increment: ol;
      content: counter( ol ) ')\a0';
      position: absolute;
    }
  }
}

.app-content {
  a {
    text-decoration: none;
    border-bottom: 1px solid var(--link-border-color);
    color: var(--link-color);
    --webkit-tap-highlight-color: rgba( 0, 0, 0, 0 );

    &:hover {
        color: var(--link-hover);
        border-color: var(--link-border-hover);
    }

    &:not(:hover) {
      transition: color .5s ease, border-color .5s ease;
    }
  }
  p + p {
    margin-top: .8rem;
  }
  p img {
    margin-bottom: 1rem;
  }

  h3 { /* like bulma's .title .is-4 */
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: .4rem;
  }
}
</style>

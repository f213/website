<template>
  <nav class="app-nav section">
    <div class="container">
      <nuxt-link to="/" class="nav-link">
        <span class="nav-link__label">Блог</span>
      </nuxt-link>
      <nuxt-link to="/favorites/" class="nav-link">
        <span class="nav-link__label">Избранное</span>
      </nuxt-link>
      <nuxt-link to="/me/" class="nav-link">
        <span class="nav-link__label">Обо мне</span>
      </nuxt-link>
      <nuxt-link to="/books/" class="nav-link">
        <span class="nav-link__label">Книги</span>
      </nuxt-link>
    </div>
  </nav>
</template>

<style scoped>
.app-nav {
  padding-top: 1.5rem;
}

.nav-link {
  border-bottom: 0;
  margin-right: 4px;
  &:not(:first-child):before {
    content: '·\a0\a0';
    margin-left: 3px;
  }

  &.nuxt-link-active {
    pointer-events: none;
    .nav-link__label {
        color: var(--text-color);
        opacity: .8;
        border-bottom: 0;
    }
  }

  &__label {
    border-bottom: 1px solid var(--navigation-border-color);
    color: var(--navigation-color);

    &:hover {
        color: var(--navigation-hover);
        border-color: var(--navigation-border-hover);
    }
    &:not(:hover) {
      transition: color .5s ease
    }
  }
}
</style>

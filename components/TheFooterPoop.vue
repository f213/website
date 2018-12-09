<template>
  <div class="app-poop is-size-5">
    <div class="app-poop__poop" :class="{'app-poop__poop--rotating': isRotating}" @click="rotate">💩</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isRotating: false,
    };
  },
  methods: {
    rotate() {
      this.isRotating = true;
      window.setTimeout(() => {
        this.isRotating = false;
      }, 1000);
    },
  },
};
</script>
<style scoped>
.app-poop {
  cursor: pointer;
  &__poop {
    display: inline-block;

    &--rotating {
      animation: spin 1s 1 ease-out;
    }
  }
}
@keyframes spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
</style>

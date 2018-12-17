<script>
import scrollMonitor from 'scrollmonitor';

export default {
  data() {
    return {
      scrollOffset: null,
    };
  },
  mounted() {
    const monitor = this.scrollOffset !== null ? scrollMonitor.create(this.$refs.container, this.scrollOffset) : scrollMonitor.create(this.$refs.container);
    monitor.enterViewport(() => {
      this.$emit('viewportEnter');
    });
    monitor.exitViewport(() => {
      this.$emit('viewportExit');
    });
  },
};
</script>

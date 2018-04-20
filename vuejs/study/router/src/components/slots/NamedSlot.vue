<template>
  <div id="pagewrap">
    <header>
      <slot name="header"></slot>
    </header>
    <aside id="sidebar">
      <slot name="sidebar"></slot>
    </aside>
    <section id="content">
      <slot name="content"></slot>
    </section>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

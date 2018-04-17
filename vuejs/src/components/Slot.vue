<template>
  <div>
    <h2>Slot</h2>
    <div>
      <inline-form></inline-form>
    </div>
    <h1 slot="header">헤더 영역</h1>
    </h1>
  </div>
</template>

<script>
import InlineForm from './slots/InlineForm';
import Layout from './slots/NamedSlot';

export default {
  name: 'Slott',
  components: {
    InlineForm, Layout
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

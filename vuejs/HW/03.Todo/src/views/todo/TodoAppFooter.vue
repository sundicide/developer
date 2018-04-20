<template>
  <div :class="$style.div">
    <el-button-group>
      <el-button type="primary" autofocus plain @click.native="filterAll()">전체</el-button>
      <el-button type="primary" plain @click.native="filterRemain()">남은 일</el-button>
      <el-button type="primary" plain @click.native="filterComplete()">완료된 일</el-button>
    </el-button-group>
    <el-button type="primary" @click.native="deleteCompleteTodo()">완료된 일 모두 삭제</el-button>
  </div>
</template>

<script>
export default {
  name: 'TodoAppHeader',
  data () {
    return {
      inputValue: '',
      filtermode: this.$store.getters.filtermode,
    }
  },
  methods: {
    filterAll() {
      this.$store.commit('showAllTodo');
    },
    filterRemain() {
      this.$store.commit('showRemainTodo');
      console.log('aa',this.filtermode);
    },
    filterComplete() {
      this.$store.commit('showCompleteTodo');
    },
    deleteCompleteTodo() {
      this.$store.commit('deleteCompleteTodo');
    },
  },
}
</script>

<style module>
.div { display: flex; justify-content: space-between; }
</style>

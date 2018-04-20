<template>
  <div :class="$style.div">
    <el-button-group>
      <el-button type="primary" @click.native="filterAll()">전체</el-button>
      <el-button type="primary" @click.native="filterRemain()">남은 일</el-button>
      <el-button type="primary" @click.native="filterComplete()">완료된 일</el-button>
    </el-button-group>
    <el-button type="primary" @click.native="deleteCompleteTodo()">완료된 일 모두 삭제</el-button>
  </div>
</template>

<script>
export default {
  name: 'TodoAppHeader',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    filterAll() {
      this.$store.commit('showAllTodo');
    },
    filterRemain() {
      this.$store.commit('showRemainTodo');
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

<template>
  <div>
    <div>{{countTodo}}개의 할일이 남았습니다.</div>
    <div style="display: flex;">
      <el-input placeholder="Please input" v-model="inputValue" @keyup.enter.native="addTodo()">
      </el-input>
      <el-button @click.native="addTodo()">추가</el-button>
    </div>
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
  computed: {
    countTodo () {
      return this.$store.getters.lengthOfRemainTodolist;
    },
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodo', this.inputValue);
    },
  },
}
</script>

<style module>
</style>

<template>
  <el-container :class="$style.border">
    <el-header>
      <w-todo-app-header />
    </el-header>
    <el-main>
      <w-todo-app-main />
    </el-main>
  </el-container>
</template>

<script>
import WTodoAppHeader from './TodoAppHeader'
import WTodoAppMain from './TodoAppMain'
export default {
  name: 'TodoApp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    WTodoAppHeader, WTodoAppMain,
  }
}
</script>

<style module>
  .border { width: 50%; border: 2px solid black; display: inline-block;}
</style>

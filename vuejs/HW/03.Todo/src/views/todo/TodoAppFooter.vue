<template>
  <div :class="$style.div">
    <el-button-group>
      <el-button type="primary" plain v-for="(value, index) in filtermode" :key="index" @click.natvie="filterButtonClick(value)">
        {{ value.label }}
      </el-button>
    </el-button-group>
    <el-button type="primary" @click.native="deleteCompleteTodo()">완료된 일 모두 삭제</el-button>
  </div>
</template>

<script>
const FILTERMODE = {
  ALL: 'showAllTodo',
  REMAIN: 'showRemainTodo',
  COMPLETE: 'showCompleteTodo',
}
export default {
  name: 'TodoAppHeader',
  data () {
    return {
      inputValue: '',
      //filtermode: this.$store.getters.filtermode,
      filtermode: [
        { label: '전체', mode : FILTERMODE.ALL, },
        { label: '남은 일', mode : FILTERMODE.REMAIN, },
        { label: '완료된 일', mode : FILTERMODE.COMPLETE, },
        ],
    }
  },
  methods: {
    filterButtonClick(value){
      this.$store.commit(value.mode);
      debugger;
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

<template>
  <div :class="$style.div">
    <el-button-group>
      <el-button type="primary" v-for="(value, index) in filtermode" :key="index" @click.natvie="filterButtonClick(value, index)" ref="filterButton" :class="{ 'is-plain': !value.clicked }">
        {{ value.label }}
      </el-button>
    </el-button-group>
    <el-button type="primary" @click.native.prevent="deleteCompleteTodo()">완료된 일 모두 삭제</el-button>
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
        { label: '전체', mode : FILTERMODE.ALL, clicked: true,},
        { label: '남은 일', mode : FILTERMODE.REMAIN, clicked: false,},
        { label: '완료된 일', mode : FILTERMODE.COMPLETE, clicked: false,},
        ],
      lastfocus: null,
      classname: '',
    }
  },
  methods: {
    filterButtonClick(value, index){
      this.$store.commit(value.mode);
      this.filtermode.forEach( x => x.clicked = false )
      this.filtermode[index].clicked = true;
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

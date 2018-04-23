<template>
  <div>
  <el-table :data="todolist" style="width: 100%" :class="$style.todoTable" >
    <el-table-column prop="label" width="50px">
      <template slot-scope="scope">
        <el-checkbox v-model="scope.row.done"></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column prop="label">
      <template slot-scope="scope">
         <input v-model="scope.row.label" v-if="scope.row.editmode" @keyup.enter="editTodo(scope.row, false)" :ref="'labelInput'" v-focus @blur="editTodo(scope.row, false)"/> 
      <span @dblclick="editTodo(scope.row, true)" v-if="!scope.row.editmode" ref="labelSpan">{{scope.row.label}}</span> 
      <span :class="$style.close" @click.stop="deleteTodo(scope.row.id)">&#x00D7;</span>
      </template>
    </el-table-column>
  </el-table>
  <div :class="$style.footerButtons">
    <el-button-group>
      <el-button type="primary" v-for="(value, index) in filtermode" :key="index" @click.natvie="filterButtonClick(value.mode, index)" ref="filterButton" :class="{ 'is-plain': !value.clicked }">
        {{ value.label }}
      </el-button>
    </el-button-group>
    <el-button type="primary" @click.native.prevent="deleteCompleteTodo()">완료된 일 모두 삭제</el-button>
  </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Constant from '@/constant.js';

export default {
  name: 'TodoAppMain',
  components: {
  },
  data () {
    return {
      filtermode: [
        { label: '전체', mode : Constant.FILTER_MODE.ALL, clicked: true,},
        { label: '남은 일', mode : Constant.FILTER_MODE.REMAIN, clicked: false,},
        { label: '완료된 일', mode : Constant.FILTER_MODE.COMPLETE, clicked: false,},
        ],
    }
  },
  computed: {
    todolist: function(){
      return this.$store.getters.todolist
    },
  },
  methods: {
    deleteTodo(id){
      this.$store.dispatch(Constant.DELETE_TODO, id);
    },
    editTodo(value, flag){
      value.editmode = flag;
    },
    filterButtonClick(value, index){
      this.$store.dispatch(Constant.CHANGE_FILTER_MODE, value);
      this.filtermode.forEach( x => x.clicked = false )
      this.filtermode[index].clicked = true;
    },
    deleteCompleteTodo() {
      this.$store.dispatch(Constant.DELETE_COMPLETELIST);
    },
  },
}
</script>

<style module>
.footerButtons {
  margin-top: 20px; display: flex; justify-content: space-between;
}
.todoTable tr td{ 
    position: relative;
    transition: 0.5s;
    -webkit-user-select: none; -moz-user-select: none;
    -ms-user-select: none; user-select: none;  
}
.todoTable tr:hover td { color: red; background: black !important; cursor: pointer;}
.todoTable label[rold='checkbox'].is-checked {
    background: #BBB;  color: #fff; text-decoration: line-through;
}
.close {
    position: absolute; right: 0; top: 0;
    padding: 12px 16px 12px 16px
}
.close:hover {
    background-color: #f44336;  color: white;
}
</style>

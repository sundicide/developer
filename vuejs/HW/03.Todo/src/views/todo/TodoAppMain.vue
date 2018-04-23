<template>
  <el-container>
  <el-table :data="todolist" style="width: 100%">
    <el-table-column prop="label">
      <template slot-scope="scope">
        <el-checkbox v-model="scope.row.done"></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column prop="label">
      <template slot-scope="scope">
         <input v-model="scope.row.label" v-if="scope.row.editmode" @keyup.enter="editTodo(scope.row, 0, false)" :ref="'labelInput'" v-focus @blur="editTodo(scope.row, 0, false)"/> 
      <span @dblclick="editTodo(scope.row, 0, true)" v-if="!scope.row.editmode" ref="labelSpan">{{scope.row.label}}</span> 
      <span :class="$style.close" @click.stop="deleteTodo(scope.$index)">&#x00D7;</span>
      </template>
    </el-table-column>
  </el-table>
  <el-footer>
    <el-button-group>
      <el-button type="primary" v-for="(value, index) in filtermode" :key="index" @click.natvie="filterButtonClick(value.mode, index)" ref="filterButton" :class="{ 'is-plain': !value.clicked }">
        {{ value.label }}
      </el-button>
    </el-button-group>
    <el-button type="primary" @click.native.prevent="deleteCompleteTodo()">완료된 일 모두 삭제</el-button>
  </el-footer>
  </el-container>
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
      editMode : false,
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
    deleteTodo(index){
      this.$store.commit('deleteTodo', index);
    },
    editTodo(value, index, flag){
      value.editmode = flag;
    },
    filterButtonClick(value, index){
      this.$store.dispatch(Constant.CHANGE_FILTER_MODE, value);
      this.filtermode.forEach( x => x.clicked = false )
      this.filtermode[index].clicked = true;
    },
    deleteCompleteTodo() {
      this.$store.commit('deleteCompleteTodo');
    },
  },
  directives: {
    focus: {
      inserted: function(el){
        el.focus();
      }
    }
  }
}
</script>

<style module>
.ul {  margin: 0; padding: 0; list-style-type: none;}
.ul li { 
    cursor: pointer; position: relative; padding: 8px 8px 8px 40px;
    background: #eee; font-size: 14px;  transition: 0.2s;
    -webkit-user-select: none; -moz-user-select: none;
    -ms-user-select: none; user-select: none;  
}
.ul li:hover {  background: #ddd;  }
.ul li.checked {
    background: #BBB;  color: #fff; text-decoration: line-through;
}
.ul li.checked::before {
    content: ''; position: absolute; border-color: #fff;
    border-style: solid; border-width: 0px 1px 1px 0px; 
    top: 10px; left: 16px;  transform: rotate(45deg);
    height: 8px; width: 8px;
}
.close {
    position: absolute; right: 0; top: 0;
    padding: 12px 16px 12px 16px
}
.close:hover {
    background-color: #f44336;  color: white;
}
</style>

<template>
  <el-container>
  <el-table :data="todolist" style="width: 100%">
    <el-table-column prop="label" :filter-method="filterHandler" ref="ttt">
      <template slot-scope="scope">
        <el-checkbox v-model="scope.row.done"></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column prop="label">
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
  <!--
  <ul :class="$style.ul">
    <li v-show="!value.hide" v-for="(value, index) in todolist" v-bind:key="index">
      <el-checkbox v-model="value.done"></el-checkbox>
      <input v-model="value.label" v-if="value.editmode" @keyup.enter="editTodo(value, index, false)" :ref="'labelInput'" v-focus @blur="editTodo(value, index, false)"/>
      <span @dblclick="editTodo(value, index, true)" v-if="!value.editmode">{{value.label}}</span>
      <span :class="$style.close" @click.stop="deleteTodo(index)">&#x00D7;</span>
    </li>
  </ul>
  -->
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
      this.$store.commit('changeFilterMode', value);
      this.filtermode.forEach( x => x.clicked = false )
      this.filtermode[index].clicked = true;
    },
    deleteCompleteTodo() {
      this.$store.commit('deleteCompleteTodo');
    },
    filterHandler() {
      this.todolist = this.$store.getters.todolist[0];
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

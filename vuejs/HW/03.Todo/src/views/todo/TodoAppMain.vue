<template>
  <ul :class="$style.ul">
    <li v-show="!value.hide" v-for="(value, index) in todolist" v-bind:key="index">
      <el-checkbox v-model="value.done"></el-checkbox>
      <input v-model="value.label" v-show="value.editmode" @keyup.enter="editTodo(value, false)"/>
      <span @dblclick="editTodo(value, true)" v-show="!value.editmode">{{value.label}}</span>
      <span :class="$style.close" @click.stop="deleteTodo(index)">&#x00D7;</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoAppMain',
  components: {
  },
  data () {
    return {
      editMode : false,
    }
  },
  computed: {
    todolist() {
      return this.$store.getters.todolist;
    },
  },
  methods: {
    deleteTodo(index){
      this.$store.commit('deleteTodo', index);
    },
    editTodo(value, flag){
      value.editmode = flag;
    },
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

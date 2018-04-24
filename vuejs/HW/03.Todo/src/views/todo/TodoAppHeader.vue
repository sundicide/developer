<template>
  <div>
    <div>{{ remainTodosCount }}개의 할일이 남았습니다.</div>
    <div :class="$style.div">
      <el-form :class="$style.form" :model="todoForm" :rules="todoRules" ref="todoForm" @submit.native.prevent="addTodo()">
        <el-form-item required prop="data">
      <el-input placeholder="Please input" v-model="todoForm.data">
      </el-input>
        </el-form-item>
      </el-form>
      <el-button @click.native="addTodo()">추가</el-button>
    </div>
  </div>
</template>

<script>
import Constant from '@/constant.js';
import { mapGetters } from 'vuex';

export default {
  name: 'TodoAppHeader',
  data () {
    return {
      inputValue: '',
      todoForm: {
        data: null,
      },
      todoRules: {
        data: [
          {
            required: true,
            trigger: 'blur',
          },
          ]
      },
    }
  },
  computed: {
    ...mapGetters([
      'remainTodosCount',
    ])
  },
  methods: {
    addTodo() {
      this.$refs['todoForm'].validate((valid) => {
        if(valid){
          this.$store.dispatch(Constant.ADD_TODOLIST, this.todoForm.data);
          this.todoForm.data = '';
        }
        else {
          return false;
        }
      })
    },
  },
}
</script>

<style module>
.div { display: flex; align-items: end; }
.form { width: 100% }
</style>

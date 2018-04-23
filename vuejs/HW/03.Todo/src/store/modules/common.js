import Constant from '@/constant.js';

const common = {
  state: {
    filterMode: Constant.FILTER_MODE.ALL,
    todolist: [
      {label: '할일 1', done: true, editmode: false,},
      {label: '할일 2', done: false, editmode: false,},
    ],
  },
  mutations: {
    [ Constant.ADD_TODOLIST ]: (state, todo) => {
      let newTodo = {
        label: todo, done: false, editmode: false,
      };
      state.todolist.push(newTodo);
    },
    [ Constant.CHANGE_FILTER_MODE ]: (state, mode) => {
      state.filterMode = mode;
    },
    deleteTodo: (state, index) => {
      state.todolist.splice(index, 1);
    },
    showAllTodo: (state) => {
      state.todolist = state.todolist
    },
    showRemainTodo: (state) => {
      state.todolist = state.todolist.forEach(x => x.done == false )
      /*
      state.todolist.find(x => {
        if (x.done === true)
          x.hide = true;
        else
          x.hide = false;
      })
      */
    },
    showCompleteTodo: (state) => {
      state.todolist.find(x => {
        if (x.done === false)
          x.hide = true;
        else
          x.hide = false;
      })
    },
    deleteCompleteTodo: (state) => {
      state.todolist = state.todolist.filter( x => {
        return x.done === false
      })
    },
  },
  actions: {
    [ Constant.ADD_TODOLIST ] ({ commit }, newTodo) {
      commit(Constant.ADD_TODOLIST, newTodo);
    },
    [ Constant.CHANGE_FILTER_MODE ] ({ commit }, mode) {
      commit(Constant.CHANGE_FILTER_MODE, mode);
    },
  },
}

export default common;

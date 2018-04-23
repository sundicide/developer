import Constant from '@/constant.js';

const common = {
  state: {
    filterMode: Constant.FILTER_MODE.ALL,
    todolist: [
      {label: '할일 1', done: true, editmode: false, id: 1},
      {label: '할일 2', done: false, editmode: false, id: 2},
    ],
    nextTodoId: 3,
  },
  mutations: {
    [ Constant.ADD_TODOLIST ]: (state, todo) => {
      let newTodo = {
        label: todo, done: false, editmode: false, id: state.nextTodoId++
      };
      state.todolist.push(newTodo);
    },
    [ Constant.CHANGE_FILTER_MODE ]: (state, mode) => {
      state.filterMode = mode;
    },
    [ Constant.DELETE_TODO ]: (state, id) => {
      state.todolist = state.todolist.filter( todo => todo.id !== id)
    },
    [ Constant.DELETE_COMPLETELIST ]: (state) => {
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
    [ Constant.DELETE_TODO] ({ commit }, id){
      commit(Constant.DELETE_TODO, id);
    },
    [ Constant.DELETE_COMPLETELIST] ({ commit }, id){
      commit(Constant.DELETE_COMPLETELIST);
    },
  },
}

export default common;

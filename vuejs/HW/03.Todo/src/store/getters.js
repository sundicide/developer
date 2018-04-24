import Constant from '@/constant.js';

const getters = {
  todolist: (state) => {
    let mode = state.common.filterMode
    if(mode === Constant.FILTER_MODE.ALL)
      return state.common.todolist;
    else if(mode === Constant.FILTER_MODE.REMAIN)
      return state.common.todolist.filter( todo => todo.done === false );
    else if(mode === Constant.FILTER_MODE.COMPLETE){
      return state.common.todolist.filter( todo => todo.done === true );
    }
    else
      return [];
  },
  remainTodosCount: state => {
    return state.common.todolist.filter(todo => {
      return todo.done == false
    }).length
  },
}
export default getters;

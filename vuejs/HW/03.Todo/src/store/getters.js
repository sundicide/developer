const getters = {
  lengthOfRemainTodolist: (state) => {
    return state.common.todolist.filter(x => x.done === false).length
  },
  todolist: (state) => state.common.todolist,
  filtermode: (state) => state.common.filterMode,
  remainTodosCount: state => {
    return state.common.todolist.filter(todo => {
      return todo.done == false
    }).length
  },
}
export default getters;

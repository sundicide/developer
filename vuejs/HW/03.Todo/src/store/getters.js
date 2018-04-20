const getters = {
  lengthOfRemainTodolist: (state) => {
    return state.common.todolist.filter(x => x.done === false).length
  },
  todolist: (state) => state.common.todolist,
}
export default getters;

const common = {
  state: {
    todolist: [
      '할일 1',
      '할일 2'
    ],
  },
  mutations: {
    addTodo: (state, todo) => {
      state.todolist.push(todo);
    },
    deleteTodo: (state, index) => {
      state.todolist.splice(index, 1);
    },
  },
  actions: {
  },
}

export default common;

const common = {
  state: {
    todolist: [
      {label: '할일 1', done: false, hide: false},
      {label: '할일 2', done: false, hide: false},
    ],
  },
  mutations: {
    addTodo: (state, todo) => {
      let newTodo = {
        label: todo, done: false, hide: false,
      };
      state.todolist.push(newTodo);
    },
    deleteTodo: (state, index) => {
      state.todolist.splice(index, 1);
    },
    showAllTodo: (state) => {
      state.todolist.forEach(x => {
        x.hide = false;
      })
    },
    showRemainTodo: (state) => {
      state.todolist.find(x => {
        if (x.done === true)
          x.hide = true;
        else
          x.hide = false;
      })
    },
    showCompleteTodo: (state) => {
      state.todolist.find(x => {
        if (x.done === false)
          x.hide = true;
        else
          x.hide = false;
      })
    },
  },
  actions: {
  },
}

export default common;

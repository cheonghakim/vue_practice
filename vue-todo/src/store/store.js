import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters: {
    fetchTodoItems(state) {
      return state.todoItems;
    },
  },
  mutations: {
    addItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
      console.log("state" + state.todoItems);
      this.test();
    },
    test() {
      console.log("ASDASDASD!@#!@#");
    },
    removeItem(state, payload) {
      //todoItem, index
      console.log(payload);
      localStorage.removeItem(payload.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleComplete(state, payload) {
      //todoItem, index
      state.todoItems[payload.index].completed = !state.todoItems[payload.index]
        .completed;
      localStorage.removeItem(payload.item);
      localStorage.setItem(payload.item, JSON.stringify(payload.Item));
    },
    clearAll(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
});

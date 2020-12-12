<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addItem="displayItem"></todo-input>
    <todo-list :propsData="todoItems" @:removeTodo="removeItem" v-on:complete="toggleComplete"></todo-list>
    <todo-footer v-on:clear="clearData"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components:{
    "TodoHeader":TodoHeader,
    "TodoInput":TodoInput,
    "TodoList":TodoList,
    "TodoFooter":TodoFooter,
  },data:()=>{
        return {
            todoItems:[],
        }
    },
    created(){
        if(localStorage.length > 0){
            for(let i=0; i<localStorage.length; i++){
                if(localStorage.key(i) !== "loglevel:webpack-dev-server"){
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
    },
    methods:{
      displayItem(todoItem){
        console.log("display")
        console.log("todo:" + todoItem);
        let obj = {completed:false, item:todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
      },
      removeItem(todo, index){
        localStorage.removeItem(todo.item);
        this.todoItems.splice(index, 1);
      },
      toggleComplete(item, index){
      // console.log(item, index)
      console.log(index, item.completed)
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(item.item);
      localStorage.setItem(item, JSON.stringify(item))
    },
    clearData(){
      localStorage.clear();
      this.todoItems = [];
    }
    }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}
input{
  border-style:groove;
  width:200px;
}
button{
  border-style:groove;
}
.showdow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}



</style>

<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
    <!-- <home-slider></home-slider> -->
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
// import HomeSlider from "./components/Homeslider.vue";

export default {
  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    // HomeSlider,
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

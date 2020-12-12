<template>
    <div>
        <ul>
            <li v-for="(item, index) in todoItems" :key="index" class="shadow">
                <i class="fas fa-check" :class={checkBtnCompleted:item.completed} @click="toggleComplete(item, index)"></i>
                <span :class={textCompleted:item.completed}>{{item.item}}</span>
                <span class="removeBtn" @click="removeTodo(item, index)">
                    <i class="fas fa-trash"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data:()=>{
        return {
            todoItems:[],
        }
    },
    created(){
        if(localStorage.length > 0){
            for(let i=0; i<localStorage.length; i++){
                if(localStorage.key(i) !== "loglevel:webpack-dev-server"){
                    // console.log(localStorage.getItem(localStorage.key(i)))
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    // this.todoItems.push(localStorage.key(i));
                }
            }
        }
    },
    methods:{
        removeTodo:function(todo, index){
            localStorage.removeItem(todo);
            this.todoItems.splice(index, 1);
        },
        toggleComplete:function(item, index){
            console.log(index, item.completed)
            item.completed = !item.completed;
            localStorage.removeItem(item);
            localStorage.setItem(item, JSON.parse(item))
        },
    },
    watch:{
        todoItems:function(){
            for(let i in this.todoItems){
                console.log("todoItems:"+this.todoItems[i])
            }
        },
    }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    padding-left:0px;
    margin-top:0px;
    text-align:left;
}
li{
    display:flex;
    min-height:50px;
    height:50px;
    line-height:50px;
    margin: .5rem 0;
    padding:0 .9rem;
    background: white;
    border-radius: 5px;
}
.checkBtn{
    line-height: 45px;
    color:#62bcad;
    margin-right:5px;
}
.checkBtnCompleted{
    color:#b3adad;
}
.removeBtn{
    margin-left:auto;
    color:#de4343;
}
.checkBtn{
    line-height:45px;
    color:#62acde;
    margin-right:5px;
}
.checkBtnCompleted{
    color:#b3adad;
}
.textCompleted{
    text-decoration: line-through;
    color:#b3adad;
}
</style>
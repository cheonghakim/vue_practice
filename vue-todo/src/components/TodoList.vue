<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(item, index) in propsData" :key="index" class="shadow">
                <i class="fas fa-check" :class={checkBtnCompleted:item.completed} @click="toggleComplete(item, index)"></i>
                <span :class={textCompleted:item.completed}>{{item.item}}</span>
                <span class="removeBtn" @click="removeTodo(item, index)">
                    <i class="fas fa-trash"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    props:["propsData"],
    methods:{
        removeTodo:function(todo, index){
            this.$emit("removeTodo", todo, index)
        },
        toggleComplete:function(item, index){
            this.$emit("complete", item, index)
        },
    },
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
/* list transition */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
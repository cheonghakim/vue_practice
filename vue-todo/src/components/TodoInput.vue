<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addItem">
        <!-- <button @click="addItem">add</button> -->
        <span class="addContainer" @click="addItem">
            <i class="fas fa-plus addBtn"></i>
        </span>
        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고 <i class="fas fa-window-close closeModalBtn" @click="showModal=false"></i></h3>
            <h6 slot="body">빈값을 입력했습니다.</h6>
        </Modal>
    </div>
</template>

<script>
import Modal from "./common/modal.vue";
export default {
    data:()=>{
        return {
            newTodoItem:"",
            showModal:false,
        }
    },
    components:{
        Modal:Modal,
    },
    methods:{
        addItem(){
            if(this.newTodoItem !== ""){
                // console.log(this.newTodoItem);
                this.$emit("addItem", this.newTodoItem)
                this.clearInput();
                console.log("add")
            }else{
                this.showModal = true;
            }
        },
        clearInput(){
            this.newTodoItem = "";
        },
    }
}
</script>

<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    background: white;
    height:50px;
    line-height:50px;
    border-radius:5px;
}
.inputBox input{
    border-style:none;
    font-size: 0.9rem;
}
.addContainer{
    float:right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: black;
    width:3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color:white;
    vertical-align: middle;
}
.closeModalBtn{
    color:green;
}
</style>
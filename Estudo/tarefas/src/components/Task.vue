<template>
    <div 
    class="layout-task" 
    :class="statusClass" 
    @click="task.pending= changeStatus">
        <p id="task-name">{{task.name}}</p>
        <span @click.stop="$emit('taskDeleted', task)" class="close">X</span>
    </div>
</template>
<script>
export default {
    props: {
        task: {type: Object, required: true}
    },
    computed: { 
        statusClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            } 
        },
        changeStatus() {
            return !this.task.pending
        },
    }
    
    
}
</script>
<style scoped>
.layout-task {
    position: relative;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px;
    font-size: 1.5em;
    width: 300px;
    height: 150px;
    margin: 20px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    cursor: pointer;

}
#task-name {
    margin-top: 40px;
    word-wrap: break-word;
    max-width: 100%;
}
.done {
    background: rgb(58, 97, 0);
    border-left: rgb(42, 156, 42) solid 20px;
    text-decoration: line-through;

}
.pending {
    background: rgb(97, 0, 0);
    border-left: rgb(156, 42, 42) solid 20px;
}
.done .close {
    position: absolute;
    display: flex;
    justify-content: center;
    line-height: 40px;
    right: 5px;
    top: 5px;
    background: rgb(45, 75, 0);
    text-decoration: none;
    height: 40px;
    width: 40px;
    border-radius: 20px;

}
.pending .close {
    background: rgb(78, 0, 0);
    position: absolute;
    display: flex;
    justify-content: center;
    line-height: 40px;
    right: 5px;
    top: 5px;
    text-decoration: none;
    height: 40px;
    width: 40px;
    border-radius: 20px;

}
</style>
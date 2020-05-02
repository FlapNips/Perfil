<template>
    <div id = "layout-taskadd">
        <input 
        id="input-task" 
        placeholder="Adicione uma Tarefa" 
        maxlength="40"
        v-model="textInput"
        @keyup.enter="addTask(textInput)" 
        type="text"/>
        <button id="button-addtask"
        @click="addTask(textInput   )">+</button>
    </div>
</template>

<script>
export default {
    props: {
        tasks: {type: Array, required: true}
    },
    data: function () {
        return {
            maxLenght: "60",
            textInput: "",
        }
    },
    methods: {
        addTask:function (newTask){
            //All lowercase
            const lowerListTask = x => x.name = x.name.toLowerCase();   //Function transform Array to LowerCase
            const newListTask = this.tasks.map(lowerListTask);          // Array in LowerCase
            const newTaskLower = newTask.toLowerCase();                 // NewTask (input) to LowerCase
            const sameName = w => w === newTaskLower                    //Same name in Array ?
            const realyNew = newListTask.filter(sameName).length == 0;  // Realy New ? yes=0 no=1
            if(realyNew){
            this.tasks.push({
                name: newTask, 
                pending: true
                })
            this.textInput=''
            console.log("Adicionadoo")
            }
        }
    }
}


</script>

<style scoped>
#layout-taskadd {
    display   : flex;
    flex-flow : row;
    margin-top: 20px;
    margin    : 30px auto 0 auto;
    width: 500px;
    height    : 100px;
}
#input-task {
    display         : block;
    background      : rgb(59, 59, 59) ;
    width           : 85%;
    text-align      : center;
    align-items     : center;
    word-wrap       : break-word;
    width           : 100%;
    font-size       : 1.2em;

    height: auto;
    resize: none;
    color : rgb(255, 255, 255);
}
#input-task::placeholder  {
    color      : black;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 90px;
    text-align : center;
}
#button-addtask {
    width     : 15%;
    height    : 100%;
    color     : black;
    background: rgb(114, 114, 175);
}
</style>
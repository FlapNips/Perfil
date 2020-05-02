<template>
    <div id="layout">
        <div @click="percentTask" id="title-text">Título</div>
        <div id="layout-bar">
            <div id="status" :style="{width:percentTask+'%'}"></div>
            <div id="progress-bar-text">{{percentTask}}%</div>
        </div>   
    </div>
</template>

<script>

export default {
    props: {
        tasks: {type: Array, required: true}
    },
    data: function () {
        return {
        progress: 50,
        title   : "Tarefas",
        }
    },
    computed: {
        percentTask: function () {
            const total = this.tasks.length
            const doneTasks = t => !t.pending
            const allDoneTasks = this.tasks.filter(doneTasks).length
            return Math.round(allDoneTasks * 100/total) || 0
        }
    }
}
</script>

<style scoped>
#layout {
    width: 80%;
    height: max-content;
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    justify-content: center;
}
#title-text {
    display: flex;
    font-family: 'Times New Roman', Times, serif;
    font-size  : 3.2em;
    color      : white;
    height     : max-content;
    width      : max-content;
    margin     : 0 auto 10px auto;
  
}
#layout-bar {
    display      : flex;
    text-align   : center;
    height       : 40px;
    background   : black;
    border       : white solid 3px;
    border-radius: 10px;

}
#status {
    display         : block;
    position        : relative;
    height          : 40px;
    border-radius   : 7.5px;
    background-color: green;
}

#progress-bar-text {
    display: block;
    position: absolute;
    line-height: 40px;
    left: 50%;
    transform: translateX(-50%);
}
#bar {
    display         : flex;
    background-color: rgba(0, 0, 0, 0);
    margin          : 10px auto 0 auto;
    border          : white solid 3px;
    border-radius   : 10px;
    min-width       : 300px;
    text-align      : center;
    line-height     : 30px;
    width           : 80%;
    height          : 30px;
}


</style>
<template>
  <div id = "app">

    <BarStatus :tasks="tasks">
    </BarStatus>   

    <AddTasks :tasks="tasks">
    </AddTasks>
    

    <TaskGrid :tasks="tasks" @taskDeleted="taskDelete">
    </TaskGrid>

  </div>
</template>

<script> 
import BarStatus from '@/components/BarStatus.vue'
import AddTasks from '@/components/AddTasks.vue'
import TaskGrid from '@/components/TaskGrid.vue'

export default {
  name      : 'App',
  components: {
    BarStatus,
    AddTasks,
    TaskGrid
  },
  data: function(){
    return {
        tasks: []
    }
  },
  methods: {
    taskDelete: function(i){
        this.tasks.splice(i,1)
    }
  },
    watch: {
      tasks: {
        deep: true,
        handler() { 
          localStorage.setItem('tasks',  JSON.stringify(this.tasks))
      }
    }
  },
  created() {
    const json = localStorage.getItem('tasks')
    const array = JSON.parse(json)
    this.tasks = Array.isArray(array) ? array : []
  }
}
</script>

<style>
#app {
  display        : flex;
  flex-direction : column;
  justify-content: center;
  text-align     : center;
  font-family    : Avenir, Helvetica, Arial, sans-serif;
  width          : 100vw;
  height         : 100vh;
}
</style>
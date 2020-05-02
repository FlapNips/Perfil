<template>
  <div id="layout-task-grid">
    <div id="tasks-isempty" v-if="tasks== 0">Sua vida está em dia !!!</div>
      <Task 
      id="task"
      v-for="(task,i) in tasks" 
      :key="task.name" 
      :task="task"
      @taskDeleted="$emit('taskDeleted', i)">
      </Task>
  </div>
</template>

<script>

import Task from '@/components/Task.vue'

export default {
  components: {
    Task
  },
  props: {
    tasks: {type: Array, required: true},
  },
}
</script>

<style scoped>
#layout-task-grid {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 550px;
  flex-wrap: wrap;
  padding: 0;
  text-decoration: white;
  background: rgb(0, 0, 0);
  list-style: none;
  user-select: none;
  overflow-y: auto;

}
#tasks-isempty {
  margin-top: 100px;
  font-size: 2em;
}
</style>
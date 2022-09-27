<script setup>
import { useRouter } from 'vue-router';
// eslint-disable-next-line no-unused-vars
const router = useRouter();
</script>
<template>
  <div class="mainContainer">
    <div>
      <h1>ToDo Component</h1>
    </div>
    <div>
      <input type="text" placeholder="Name of the task selected">
    </div>
    <div>
      <h4><label for="descriptionTask">Description:</label></h4>
      <textarea id="descriptionTask" name="description" rows="10" cols="100"
        placeholder="Add more detailed description"></textarea>
    </div>
    <div>
      <h4><label for="activityTask">Activity:</label></h4>
      <textarea id="activityTask" name="activity" rows="10" cols="100" placeholder="Writte a comment"></textarea>
    </div>
  </div>
</template>

<style scoped>
.mainContainer {
  background-color: lightgrey;
}
</style>

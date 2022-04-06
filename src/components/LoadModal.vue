<template>
  <div class="container">
      <Dialog :modal='true' v-model:visible="display">
        <FileUpload />
      </Dialog>
  </div>
</template>

<script>
export default {
  name: 'LoadModal',
  data(){
    return{
      display: true
    }
  }
}
</script>

<style scoped>
  
</style>
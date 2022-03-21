<template>
  <div class="main__checkbox-group">
    <Checkbox />
  </div>
</template>

<script>
  import Checkbox from './Checkbox.vue'
  
  export default {
    name: 'CheckBoxGroup',
    components: { Checkbox }
  }
</script>
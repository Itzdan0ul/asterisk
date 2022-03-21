<template>
  <div class="main__semaphore" 
  :class="{ 
    'main__semaphore--green': level.includes('isStrong'), 
    'main__semaphore--yellow': level.includes('isNotStrong'), 
    'main__semaphore--red': level.includes('isWeak') }"></div>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'Semaphore',
    computed: { ...mapState('semaphore', ['level']) }
  }
</script>
<template>
  <div class="layout">
    <TheMain />
    <Transition name="snackbar-transition" 
      enter-active-class="animate__animated animate__flash"
      leave-active-class="animate__animated animate__fadeOut"
      @enter="enter">
      <Snackbar v-show="show"/>
    </Transition>
  </div>
</template>

<script>
  import TheMain from './components/TheMain.vue'
  import Snackbar from './components/Snackbar.vue'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'App',
    components: {
      TheMain,
      Snackbar
    },
    methods: {
      enter() { setTimeout(() => this.toggleSnackbar(false), 3500) },
      ...mapMutations('snackbar', { toggleSnackbar: 'TOGGLE_SNACKBAR' })
    },
    computed: { ...mapState('snackbar', ['show']) }
  }
</script>
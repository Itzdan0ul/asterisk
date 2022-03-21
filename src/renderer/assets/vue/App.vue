<template>
  <div class="layout">
    <Main />
    <Transition name="snackbar-transition" 
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOut"
      @enter="enter">
      <Snackbar v-show="show"/>
    </Transition>
  </div>
</template>

<script>
  import Main from './components/Main.vue'
  import Snackbar from './components/Snackbar.vue'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'App',
    components: {
      Main,
      Snackbar
    },
    methods: {
      enter() { setTimeout(() => this.toggleSnackbar(false), 3500) },
      ...mapMutations('snackbar', { toggleSnackbar: 'TOGGLE_SNACKBAR' })
    },
    computed: { ...mapState('snackbar', ['show']) }
  }
</script>
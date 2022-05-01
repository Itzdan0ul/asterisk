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
import { mapState, mapMutations } from 'vuex';
  import TheMain from './components/TheMain.vue';
  import Snackbar from './components/Snackbar.vue';

  export default {
    name: 'App',
    components: {
      TheMain,
      Snackbar
    },
    mounted() {
      if (localStorage.key(0) === null) {
        const config = {
          colorScheme: 'light'
        }

        localStorage.setItem('config', JSON.stringify(config));
      }
    },
    methods: {
      enter() { setTimeout(() => this.toggleSnackbar(false), 3500) },
      ...mapMutations('snackbar', { toggleSnackbar: 'TOGGLE_SNACKBAR' })
    },
    computed: { ...mapState('snackbar', ['show']) }
  }
</script>
<template>
  <Titlebar title="Asterisk" icon="./assets/images/asterisk@18x18.png" />
  <div class="layout">
    <TheHeader />
    <TheMain />
    <Transition
      name="snackbar-transition"
      enter-active-class="animate__animated animate__flash"
      leave-active-class="animate__animated animate__fadeOut"
      @enter="enter()"
    >
      <Snackbar v-show="showSnackbar" />
    </Transition>
  </div>
</template>

<script>
  import TheMain from './components/TheMain.vue';
  import Titlebar from './components/Titlebar.vue';
  import Snackbar from './components/Snackbar.vue';
  import TheHeader from './components/TheHeader.vue';
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'App',
    components: {
      TheMain,
      Snackbar,
      TheHeader,
      Titlebar,
    },
    beforeMount() {
      this.getLocale();
      this.onLoadAppTheme();
      this.translate();
    },
    methods: {
      enter() {
        setTimeout(() => this.toggleSnackbar(false), 3000);
      },
      ...mapMutations('theme', {
        onLoadAppTheme: 'LOAD_THEME',
      }),
      ...mapMutations('snackbar', { toggleSnackbar: 'TOGGLE_SNACKBAR' }),
      ...mapActions('i18n', ['getLocale']),
      ...mapActions('i18n', ['translate']),
    },
    computed: {
      ...mapState('i18n', ['messages']),
      ...mapState('snackbar', ['showSnackbar']),
    },
  };
</script>

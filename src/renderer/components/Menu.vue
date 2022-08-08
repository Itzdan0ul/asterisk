<template>
  <nav class="menu" role="menu">
    <div class="menu__body">
      <Select />
      <button
        class="btn menu__button"
        type="button"
        :title="messages['Theme']"
        @click="onSetTheme()"
      >
        <InlineSvg :src="icon" />
      </button>
      <button
        class="btn menu__button menu__button--help"
        type="button"
        :title="messages['Help']"
        @click="onGetHelp()"
      >
        <InlineSvg src="assets/images/help.svg" />
      </button>
    </div>
  </nav>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import Select from './Select.vue';
  import InlineSvg from 'vue-inline-svg';

  export default {
    name: 'Menu',
    components: { InlineSvg, Select },
    methods: {
      ...mapMutations('help', { onGetHelp: 'OPEN_WEB_REPOSITORY' }),
      ...mapMutations('theme', { onSetTheme: 'SET_THEME' }),
    },
    computed: {
      ...mapState('i18n', ['messages']),
      ...mapState('theme', ['icon']),
    },
  };
</script>

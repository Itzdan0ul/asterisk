<template>
  <div class="alert" role="alert">
    <InlineSvg src="assets/images/warning.svg" />
    <span class="alert__text">{{
      messages['As long as the "Emojis" checkbox is active, only emojis will appear']
    }}</span>
  </div>
</template>

<script>
  import InlineSvg from 'vue-inline-svg';
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'Alert',
    components: { InlineSvg },
    computed: {
      ...mapState('alert', ['showAlert']),
      ...mapState('i18n', ['messages']),
    },
  };
</script>

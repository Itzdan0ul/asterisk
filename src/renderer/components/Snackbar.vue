<template>
  <div class="snackbar" role="dialog">
    <span class="snackbar__text">{{ messages['Password copied!'] }}</span>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Snackbar',
    computed: {
      ...mapState('i18n', ['messages']),
    },
  };
</script>

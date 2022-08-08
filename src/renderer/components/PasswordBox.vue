<template>
  <div class="password-box" role="textbox">
    <div class="password-box__body">
      <input
        id="password-box"
        class="input password-box__input"
        type="text"
        :value="password"
        readonly
        :title="password"
      />
      <button
        class="btn password-box__button"
        type="button"
        :title="messages['Copy password']"
        @click="onCopyPassword()"
      >
        <InlineSvg src="assets/images/copy.svg" />
      </button>
    </div>
    <PasswordStrengthBar />
  </div>
</template>

<script>
  import InlineSvg from 'vue-inline-svg';
  import { mapState, mapMutations } from 'vuex';
  import PasswordStrengthBar from './PasswordStrengthBar.vue';

  export default {
    name: 'PasswordBox',
    components: {
      InlineSvg,
      PasswordStrengthBar,
    },
    methods: {
      onCopyPassword() {
        const passwordBox = document.getElementById('password-box');
        const password = passwordBox.value;

        if (password !== '') {
          navigator.clipboard.writeText(password);
          this.toggleSnackbar(true);
        }
      },
      ...mapMutations('snackbar', { toggleSnackbar: 'TOGGLE_SNACKBAR' }),
    },
    computed: {
      ...mapState('i18n', ['messages']),
      ...mapState('passwordBuilder', ['password']),
    },
  };
</script>

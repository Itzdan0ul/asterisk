<template>
  <div class="main__password-box">
    <div class="main__textbox" :title="password">
      <input id=password-box class="input main__input" type="text" :value="password" maxlength="50" readonly>
      <button class="btn main__btn--copy" type="button" title="Copy password" @click="copyToClipboard()">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0.75H1.5V12.75H3V2.25H12V0.75ZM15.75 3.75H4.5V17.25H15.75V3.75ZM14.25 15.75H6V5.25H14.25V15.75Z" fill="#2E3338"/>
        </svg>
      </button>
    </div>
    <Semaphore />
  </div>
</template>

<script>
import Semaphore from './Semaphore.vue';
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'PasswordBox',
    components: { Semaphore },
    methods: {
      copyToClipboard() {
        const passwordBox = document.getElementById('password-box')

        if (passwordBox.value != '') {
          const show = true;
          
          this.toggleSnackbar(show);
          navigator.clipboard.writeText(passwordBox.value);
        }
      },
      ...mapMutations('snackbar', { toggleSnackbar: 'TOGGLE_SNACKBAR' })
    },
    computed: { ...mapState('passwordBuilder', ['password']) }
  }
</script>
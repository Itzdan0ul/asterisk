<template>
  <div
    class="password-strength-bar"
    :class="{
      'password-strength-bar--strong': security.includes('strong'),
      'password-strength-bar--medium': security.includes('medium'),
      'password-strength-bar--weak': security.includes('weak'),
      'password-strength-bar--none': security.includes('none'),
    }"
    role="bar"
  ></div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'PasswordStrengthBar',
    computed: {
      ...mapState('passwordStrengthBar', ['security']),
    },
  };
</script>

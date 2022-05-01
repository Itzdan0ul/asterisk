<template>
  <main class="main">
    <PasswordBox />
    <div class="main__content">
      <div class="main__title">
        <span>Customize your password</span>
      </div>
      <div class="main__options">
        <RadioGroup />
        <CheckboxGroup />
      </div>
      <Range />
      <div class="main__button-option">
        <button class="btn main__btn--generate" type="button" @click="generatePassword()">Generate</button>
      </div>
    </div>
  </main>
</template>

<script>
  import Range from './Range.vue';
  import RadioGroup from './RadioGroup.vue';
  import PasswordBox from './PasswordBox.vue';
  import CheckboxGroup from './CheckBoxGroup.vue';
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'TheMain',
    components: {
      Range,
      PasswordBox,
      RadioGroup,
      CheckboxGroup
    },
    methods: {
      generatePassword() {
        const payload = {
          radioGroup: [...this.radioGroup],
          checkboxGroup: [...this.checkboxGroup],
          count: parseInt(this.count)
        }

        if (this.checkboxGroup.length > 0) {
          this.setLevel(payload);
        } else {
          payload.count = 0;
          this.setLevel(payload);
        }

        this.getPassword(payload);
      },
      ...mapMutations('semaphore', { setLevel: 'SET_LEVEL' }),
      ...mapActions('passwordBuilder', ['getPassword'])
    },
    computed: {
      ...mapState('range', ['count']),
      ...mapState('radio', ['radioGroup']),
      ...mapState('checkbox', ['checkboxGroup'])
    }
  }
</script>
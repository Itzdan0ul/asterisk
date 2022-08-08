<template>
  <Transition
    name="alert-transition"
    enter-active-class="animate__animated animate__swing"
    leave-active-class="animate__animated animate__fadeOutUp"
    @enter="enter()"
  >
    <Alert v-show="showAlert" />
  </Transition>
  <main class="main">
    <PasswordBox />
    <div class="main__body">
      <h2 class="main__title">{{ messages['Costumize your password'] }}</h2>
      <div class="main__buttons">
        <div class="main__radios">
          <VRadio
            :radio="radio.text"
            :text="messages[radio.text]"
            :description="messages[radio.description]"
            v-for="radio of radios"
            :key="radio.id"
            @check="onChangeRadioState(radio.text)"
          />
        </div>
        <div class="main__checkboxes">
          <VCheckbox
            :text="messages[checkbox.text]"
            :checkbox="checkbox.text"
            :disabled="checkbox.disabled"
            v-for="checkbox of checkboxes"
            :key="checkbox.id"
            @check="onChangeCheckboxState(checkbox.text)"
          />
        </div>
      </div>
      <div class="main__tools">
        <label class="main__label">{{ messages['Password length'] }}: {{ count }}</label>
        <div class="main__range">
          <Range @change="onGeneratePassword()" />
          <button
            class="btn main__generate-btn"
            type="button"
            @click="onGeneratePassword()"
            >{{ messages['Generate'] }}</button
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import Alert from './Alert.vue';
  import Range from './Range.vue';
  import VRadio from './VRadio.vue';
  import VCheckbox from './VCheckbox.vue';
  import PasswordBox from './PasswordBox.vue';
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'TheMain',
    components: {
      PasswordBox,
      VRadio,
      VCheckbox,
      Range,
      Alert,
    },
    data() {
      return {
        radios: [
          {
            id: 1,
            text: 'Easy to say',
            description: 'Avoid numbers and special characters.',
          },
          {
            id: 2,
            text: 'Easy to read',
            description: "Avoid ambiguous characters such as '1', '0', 'O' and 'l'.",
          },
          {
            id: 3,
            text: 'All characters',
            description: 'Any character, except ASCII and emojis.',
          },
        ],
        checkboxes: [
          { id: 1, text: 'Uppercase' },
          { id: 2, text: 'Numbers' },
          { id: 3, text: 'Symbols' },
          { id: 4, text: 'Lowercase' },
          { id: 5, text: 'Ascii' },
          { id: 6, text: 'Emojis' },
        ],
      };
    },
    methods: {
      enter() {
        setTimeout(() => this.toggleAlert(false), 3500);
      },
      onChangeCheckboxState(checkbox) {
        if (this.checkedCheckboxes.includes('Emojis')) {
          if (checkbox !== 'Emojis') this.toggleAlert(true);
        }

        this.changeCheckboxState(checkbox);
      },
      onGeneratePassword() {
        const payload = {
          radios: [...this.checkedRadios],
          checkboxes: [...this.checkedCheckboxes],
          range: parseInt(this.count),
        };

        if (this.checkedCheckboxes.length > 0) {
          this.validatePasswordSecurity(payload);
        } else {
          payload.range = 0;
          this.validatePasswordSecurity(payload);
        }

        this.buildPassword(payload);
      },
      ...mapMutations('radio', { onChangeRadioState: 'CHANGE_RADIO_STATE' }),
      ...mapMutations('checkbox', {
        changeCheckboxState: 'CHANGE_CHECKBOX_STATE',
      }),
      ...mapMutations('passwordStrengthBar', {
        validatePasswordSecurity: 'VALIDATE_PASSWORD_SECURITY',
      }),
      ...mapMutations('alert', { toggleAlert: 'TOGGLE_SNACKBAR' }),
      ...mapActions('passwordBuilder', ['buildPassword']),
    },
    computed: {
      ...mapState('range', ['count']),
      ...mapState('i18n', ['messages']),
      ...mapState('radio', { checkedRadios: 'radios' }),
      ...mapState('checkbox', { checkedCheckboxes: 'checkboxes' }),
      ...mapState('alert', ['showAlert']),
    },
  };
</script>

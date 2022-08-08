<template>
  <div
    class="select-locale"
    :class="{ 'select-locale--mouse-enter': isFocused }"
    role="combobox"
    @mouseenter="onMouseEnter()"
    @mouseleave="onMouseLeave()"
  >
    <div
      class="select-locale__option"
      :class="{ 'select-locale__option--reverse': locale === 'es-419' }"
      role="option"
    >
      <button
        class="btn select-locale__btn"
        type="button"
        :title="language.locale"
        v-for="language of languages"
        :key="language.id"
        @click="onSelectLanguage(language.locale)"
      >
        <InlineSvg :src="language.flag" />
      </button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import InlineSvg from 'vue-inline-svg';

  export default {
    name: 'Select',
    components: { InlineSvg },
    data() {
      return {
        isFocused: false,
        languages: [
          { id: 1, locale: 'en-US', flag: 'assets/images/us_flag.svg' },
          { id: 2, locale: 'es-419', flag: 'assets/images/mexico_flag.svg' },
        ],
      };
    },
    methods: {
      onMouseEnter() {
        this.isFocused = true;
      },
      onMouseLeave() {
        this.isFocused = false;
      },
      onSelectLanguage(locale) {
        this.setLocale(locale);
        this.translate();
      },
      ...mapMutations('i18n', { setLocale: 'SET_LOCALE' }),
      ...mapActions('i18n', ['translate']),
    },
    computed: {
      ...mapState('i18n', ['locale']),
    },
  };
</script>

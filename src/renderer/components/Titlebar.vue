<template>
  <div class="titlebar">
    <div class="titlebar__data">
      <img class="titlebar__icon" :src="icon" />
      <h1 class="titlebar__title">{{ title }}</h1>
    </div>
    <div class="titlebar__btn-group">
      <button
        class="titlebar__btn"
        type="button"
        :title="messages['Minimize']"
        @click="onMinimizeWindow()"
      >
        <svg
          width="9"
          height="2"
          viewBox="0 0 9 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.542619 1.7C0.392931 1.7 0.265073 1.61972 0.159044 1.45917C0.0530146 1.29861 0 1.09556 0 0.85C0 0.604444 0.0530146 0.401388 0.159044 0.240833C0.265073 0.0802773 0.399168 0 0.561331 0H8.45738C8.60707 0 8.73493 0.0802773 8.84096 0.240833C8.94699 0.401388 9 0.604444 9 0.85C9 1.09556 8.94699 1.29861 8.84096 1.45917C8.73493 1.61972 8.60083 1.7 8.43867 1.7H0.542619Z"
            fill="#7A7A7A"
          />
        </svg>
      </button>
      <button
        class="titlebar__btn titlebar__btn--close"
        type="button"
        :title="messages['Close']"
        @click="onCloseWindow()"
      >
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 5.22414L0.87931 8.84483C0.775862 8.94828 0.655172 9 0.517241 9C0.37931 9 0.258621 8.94828 0.155172 8.84483C0.0517241 8.74138 0 8.62069 0 8.48276C0 8.34483 0.0517241 8.22414 0.155172 8.12069L3.77586 4.5L0.155172 0.87931C0.0517241 0.775862 0 0.655172 0 0.517241C0 0.37931 0.0517241 0.258621 0.155172 0.155172C0.258621 0.0517241 0.37931 0 0.517241 0C0.655172 0 0.775862 0.0517241 0.87931 0.155172L4.5 3.77586L8.12069 0.155172C8.22414 0.0517241 8.34483 0 8.48276 0C8.62069 0 8.74138 0.0517241 8.84483 0.155172C8.94828 0.258621 9 0.37931 9 0.517241C9 0.655172 8.94828 0.775862 8.84483 0.87931L5.22414 4.5L8.84483 8.12069C8.94828 8.22414 9 8.34483 9 8.48276C9 8.62069 8.94828 8.74138 8.84483 8.84483C8.74138 8.94828 8.62069 9 8.48276 9C8.34483 9 8.22414 8.94828 8.12069 8.84483L4.5 5.22414Z"
            fill="#7A7A7A"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'Titlebar',
    props: {
      title: String,
      icon: String,
    },
    methods: {
      ...mapMutations('titlebar', { onCloseWindow: 'CLOSE_WINDOW' }),
      ...mapMutations('titlebar', { onMinimizeWindow: 'MINIMIZE_WINDOW' }),
    },
    computed: {
      ...mapState('i18n', ['messages']),
    },
  };
</script>

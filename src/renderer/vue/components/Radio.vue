<template>
  <div class="main__radio" v-for="radioButton in radioButtons" :key="radioButton.id" @click="changeRadioState(radioButton.name.toLowerCase())">
    <div class="input main__input--radio" :class="{ 'checked-radio': radioGroup.includes(radioButton.name.toLowerCase()) }" role="radio"></div>
    <label>{{ radioButton.name }}</label>
    <span :title="radioButton.title">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 1.25C4.53977 1.25 4.16667 1.6231 4.16667 2.08333C4.16667 2.54357 4.53977 2.91667 5 2.91667C5.46024 2.91667 5.83334 2.54357 5.83334 2.08333C5.83334 1.6231 5.46024 1.25 5 1.25Z" fill="white"/>
        <path d="M5.83334 8.75H4.16667L4.16667 3.75H5.83334L5.83334 8.75Z" fill="white"/>
      </svg>
    </span>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'Radio',
    data() {
      return {
        radioButtons: [
          { id: 1, name: 'Easy to say', title:  'Avoid numbers and special characters.'}, 
          { id: 2, name: 'Easy to read', title:  'Avoid ambiguous characters such as \'1\', \'0\', \'O\' and \'l\'.' },
          { id: 3, name: 'All characters', title:  'Any character, except ASCII and emoji.' }
        ]
      }
    },
    methods: { ...mapMutations('radio', { changeRadioState: 'CHANGE_RADIO_STATE' }) },
    computed: { ...mapState('radio', ['radioGroup']) }
  }
</script>